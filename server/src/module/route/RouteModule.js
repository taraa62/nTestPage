const BModule = require("../BModule")
const passport = require('passport');
const RouteController = require('./RouteController');

class RouteModule extends BModule {

    async init() {
        this.controller = new RouteController(this, this.subConfig, this.getWaitInit());

        this.route = this.server._express.Router();

        if (this.subConfig.isUseHttpRoute && this.subConfig.isUseHttpRoute) {
            this.route.get(this.getUrl(":controller", ":action"), async (req, res, next) => {
                // console.log('params get=> is', req.params);
                await this.controller.runHttp(req.params.controller, req.params.action, req, res, next);
            });





            //  console.log("mask is  ", this.getUrl2(":url", ":ww"))
            this.route.post(this.getUrl(":controller", ":action"), async (req, res, next) => {
                // console.log('\n params post=>  is', req.params);
                await this.controller.runHttp(req.params.controller, req.params.action, req, res, next);

            });
        }

        this.server.app.use(this.route);
    }

    endInit() {
        this.controller.endInit();
    }

    getUrl(controller, action) {
        return `/${controller}/${action}`;
    }
    getUrl2(action) {
        return `/${action}`;
    }

    getModule(name) {
        return this.server.getModule(name);
    }
    getSubControllerHttp(name){
        return this.controller.getControllerHttp(name);
    }


    //******** socket*************//
    async newSocketMess(socket, json) {
        if (this.subConfig.isUseSocketRoute) {
            await this.controller.runSocket(socket, json);
        }
    }


}

module.exports = RouteModule;
