const SController = require('../../SController');
const Server = require('../../../../../server/ServerTestPage');

class TerminalController extends SController {

    endInit() {
        this.cmdModule = this.getModule("cmd_utils");
    }

    test(socket, json) {
        console.log(json);
        socket.emit(json.__send, JSON.stringify({msg: "hello"}));
    }

    initTerminal(socket, json) {
        if (this.cmdModule) {
            Server.inst.EE.emit("initTerminal", {s:socket, j:json});
        }

    }

}

module.exports = TerminalController;
