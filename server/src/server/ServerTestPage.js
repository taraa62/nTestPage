const EventEmitter = require('events').EventEmitter;
const BaseServer = require("./BaseServer");

class Server extends BaseServer {

  constructor() {
    console.log("---------START RUN INITIALIZATION SERVER-----------");
    super();


  }

  _init() {
    Server.inst = this;
    super._init();
  }


  async stop() {
    await super.stop();
  }

}

module.exports = Server;


