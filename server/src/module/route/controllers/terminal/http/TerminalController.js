const Controller = require("../../Controller");

class TerminalController extends Controller {

    endInit() {
        super.endInit();
        this.socketModule = this.getModule("socket");
        this.cmdModule = this.getModule("cmd_utils");
    }


    get(req, res, next) {
        if (!this.cmdModule) {
            next();
        } else {
            res.render("terminal");
        }
    }

}

module.exports = TerminalController;