class BModule {

    constructor(config, server, _wait) {
        if (_wait) this._w = _wait;

        this.config = config;
        this.subConfig = config.config || {};
        this.type = config.type;
        this.name = config.name;
        this.isDestroy = false;
        this.listWait = [];

        if (this.config.type !== 'bLoger') {
            if (this.type !== "logger") {
                this.className = config.path.substring(config.path.lastIndexOf("/") + 1, config.path.length);

                this.server = server;

                const logConfig = (!server) ? this.getConfigModule("logger") : server.getConfigModule("logger");
                if (logConfig) {
                    logConfig.config.forClassName = this.className;
                    const cl = require(logConfig.path);
                    this.logger = new cl(logConfig, this, this.getWaitInit());
                }
            }
            if (!this.logger && this.config.type !== 'logger') {
                const _bLoger = require("./logger/BLogger");
                this.logger = new _bLoger({type: 'bLoger'}, this, this.getWaitInit());
            }
            this.init();
        }
        if (this.listWait.length > 0) {
            Promise.all(this.listWait).then(v => {
                this.listWait.length = 0;
                this.initResolve();
                delete this.listWait;
            });
        }
    }

    getWaitInit() {
        let resp = null;
        const _w = new Promise(res => {
            resp = res;
        })
        this.listWait.push(_w);
        return resp;
    }


    init() {

    } // for simple initialization after call constructor

    initResolve() {
        if (this._w && this.listWait.length < 1) {
            this._w(true);
            delete this._w;
        }
    }

    endInit() {
    } // run after initialization all modules (before and after run server)

    async destroy() {
        console.log("destroy=>", this.name);
        this.isDestroy = true;
    }

    getModule(name) {
        return this.server.getModule(name);
    }

    getConfigModule(name) {
        return this.server.getConfigModule(name);
    }

    getConfigLogger(name) {
        return this.server.getConfigLogger();
    }

    getModuleLogger() {
        return this.logger;
    }
}

module.exports = BModule;



