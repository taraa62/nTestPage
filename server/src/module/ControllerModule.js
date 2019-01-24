// const v = require("./cmdUtils/CMDUtilsModule")

class ControllerModule {

    static getAndInitModule(config, app, _wait) {
        if (config.isUse && config.path && config.type !== "logger") {
            const _module = require(config.path);
            const module = new _module(config, app, _wait);
            return module;
        }
        return null;
    }

}

module.exports = ControllerModule;
