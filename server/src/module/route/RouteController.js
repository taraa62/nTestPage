class RouteController {

    constructor(parent, config, _wait) {
        this.routeModule = parent;
        this.isUseHttp = config.isUseHttpRoute || false;
        this.isUseSocket = config.isUseSocketRoute || false;
        this.logger = this.routeModule.getModuleLogger();
        this.controllers = {};
        if (this.isUseHttp) {
            if (config.httpControllers) {
                for (let v in config.httpControllers) {
                    const contoller = require(config.httpControllers[v]);
                    this.controllers[v] = new contoller(this);
                }
            }
        }
        this.controllersS = {};
        if (this.isUseSocket) {
            if (config.socketControllers) {
                for (let v in config.socketControllers) {
                    const contoller = require(config.socketControllers[v])
                    this.controllersS[v] = new contoller(this);
                }
            }
        }
        _wait(true);
    }

    _init() {

    }


    endInit() {
        Object.values(this.controllers).map(v => v.endInit());
        Object.values(this.controllersS).map(v => v.endInit());
    }

    getModule(name) {
        return this.routeModule.getModule(name);
    }

    getControllerLogger() {
        return this.logger;
    }


    //якщо виключений роут, ми навіть сюда не повиині потрапити., але всетаки може хтось в ручну визвав
    async runHttp(controller, action, req, res, next) {
        this.logger.info(action);
        if (this.isUseHttp) {
            if (this.controllers[controller]) {
                return await this.controllers[controller].run(action, req, res, next)
            } else next();
        }
    }

    //******* socket *********//
    //якщо виключений роут, ми навіть сюда не повиині потрапити., але всетаки може хтось в ручну визвав
    async runSocket(socket, json) {
        if (this.isUseSocket) {
            this.getControllerSocket(json);

            if (this.controllersS[json.controller]) {
                await this.controllersS[json.controller].run(socket, json);
            } else {
                socket.emit(json.__send, "user command is not found")
            }
        }
    }

    getControllerSocket(json) {
        if (json.command) {
            const arr = json.command.split("/");
            if (arr[0] === "") arr.shift();
            if (arr.length === 2) {
                json.controller = arr[0];
                json.action = arr[1];
            } else json.controller = "default";
        } else {
            json.controller = "default";
        }
    }

    getControllerHttp(name) {
        return this.controllers[name];
    }


}

module.exports = RouteController;
