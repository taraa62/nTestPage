const Controller = require("../../Controller")

/**
 * під час запросу від клієнта я не роблю провірку на загружаючий файл, оскільки це повиино робитись на nix
 * провірка на загрузку робитсь в класі WorkFiles
 */
class DonorController extends Controller {

    endInit() {
        super.endInit();

        this.listSubController = {};
    }


    registerHOST(host, controller) {
        if (host && controller)
            this.listSubController[host] = controller;
    }

    async run(action, req, res, next) {
        if (this.listSubController[req.headers.host]) {
            this.listSubController[req.headers.host].run(action, req, res, next);
        } else next();
    }


}

module.exports = DonorController;