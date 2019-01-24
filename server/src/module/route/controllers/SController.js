class SController {

    constructor(controller) {
        this.controller = controller;
        this.logger = controller.getControllerLogger();
    }

    endInit() {
        this.staticDB = this.getModule("staticDB");
        this.localDB = this.getModule("localDB");
    }


    async run(socket, json) {
        const action = this[json.action]
        if (action && typeof action === "function") {
            await this[json.action](socket, json);
        } else {
            socket.emit(json.__send, "invalid user action!")
        }
    }

    getModule(name) {
        return this.controller.getModule(name);
    }
    getStaticDB(){
        return this.staticDB;
    }
    getLocalDB(){
        return this.localDB;
    }
    getLogger(){
        return this.logger;
    }

}

module.exports = SController;