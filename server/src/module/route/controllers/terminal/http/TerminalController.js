const Controller = require("../../Controller");

class TerminalController extends Controller {

    endInit() {
        super.endInit();
        this.socketModule = this.getModule("socket");
        this.cmdModule = this.getModule("cmd_utils");
    }


    get(req, res, next) {
        if (!this.cmdModule) {
            this.logger.error("cmd module is not run!")
            next();
        } else {
            res.render("terminal");
        }
    }

}

module.exports = TerminalController;
