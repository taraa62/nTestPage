const BModule = require("../BModule");
const socketioJwt = require('socketio-jwt'); // auth via JWT for socket.io

const DEFAULT_SOCKET_OPTION = {
    serveClient: false,
    path: '/socket',
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
};

/**
 * Якщо включений модуль аоризації, ми автоматично включаємо і провірку на авторизацію дл сокетів
 * логіку не розносив у відповідний клас провірки авторизації, поки що було не потрібно.
 *
 * якщо кількість варіантів провірки авторизації збільшиться, потірбно рознести у відповідний модуль, для того щоб не робити кашу тут.
 *
 * по дефолту якщо провірка на авторизацію вимкнута, то ми можемо коннектитись до сервера .
 */
class SocketModule extends BModule {


    init() {
        this.auth = this.getModule('authorization');
        this.route = this.getModule('route');
        this.contrNewUser = null; //контроллер, відповідно який буде створювати нового юзера, якщо його не має

        if (this.config) this.socketOption = Object.assign(DEFAULT_SOCKET_OPTION, this.config.configS);
        this.io = require('socket.io')(this.server.server, DEFAULT_SOCKET_OPTION);
        this.server.app.set('io', this.io);

        const _self = this;
        if (this.auth && this.subConfig.isCheckAuthorize) {
            this.io.use(socketioJwt.authorize({
                secret: this.auth.subConfig.jwtsecret,
                handshake: true
            }));
            this.io.on('connection', function (socket) {
                console.log('hello => ', socket.decoded_token.name);
                socket.contrNewUser = this.contrNewUser;
                _self.addListeners.call(_self, socket);
            })
        } else {
            this.io.sockets.on('connection', async (socket) => {
                socket.contrNewUser = this.contrNewUser;
                _self.addListeners.call(_self, socket);
            })
        }
        this.initResolve();

    }

    addListeners(socket) {
        socket.on("unauthorized", function (error, callback) {
            if (error.data.type == "UnauthorizedError" || error.data.code == "invalid_token") {
                // redirect user to login page perhaps or execute callback:
                callback();
                console.log("User's token has expired");
            }
        });

        if (this.route) {
            socket.on(this.subConfig.listen, (data) => {
                let json = {}
                try {
                    json = JSON.parse(data);
                } catch (e) {
                    json = {data: data};
                }
                json.__mess = this.subConfig.listen;
                json.__send = this.subConfig.send;
                this.route.newSocketMess(socket, json);
            })
        }
        socket.on('disconnect', (reason) => {
            if (socket.user && socket.user.disconnectCallback) {
                if (typeof socket.user.disconnectCallback === "function") {
                    socket.user.disconnectCallback(reason);
                }
            }
        });

        socket.on('error', (error) => {
            if (socket.user && socket.user.errorCallback) {
                if (typeof socket.user.errorCallback === "function") {
                    socket.user.errorCallback(error);
                }
            }
        });
    }

    sentToSocketUsers(userID, data) {
        const sockets = this.io.sockets.sockets;

        Object.keys(sockets).forEach(v => {
            if (sockets[v].user && sockets[v].user.dbData) {
                if (sockets[v].user.dbData.userdID === userID || sockets[v].user.dbData.host === data.host) {
                    sockets[v].user.authorizeUser(data);
                    return;
                }
            } else {
                if (sockets[v].contrNewUser) {
                    sockets[v].contrNewUser.autorizeNewUser(data);
                }
            }
        });

    }

    getActiveSocket() {
        return Object.keys(this.io.sockets.sockets).length;
    }

    async destroy() {
        return await new Promise(closed => {
            const closeHttp = () => this.io.httpServer.close(() => {
                console.log("destroy socket!!!")
                closed()
            });
            this.io.close(closeHttp);

        });
    }
}

module.exports = SocketModule;