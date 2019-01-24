const BModule = require("../BModule");
const SERVER = require("./../../server/ServerTestPage");
const FileManager = require("./../../utils/FileManager");


const LOG_FOLDER = 'LOGS';

class BLogger {

  constructor(config, server = null, _wait = null) {
    this.config = config;
    this.server = server;
    this._w = _wait;
    this.subConfig = (SERVER.inst || server).getConfigWithGlobal("logger").config;
    this.init();

  }

  async init() {
    await FileManager.checkPathToFolder(this.subConfig.LOG_FOLDER, process.env.projectFolder, true).then(async v => {
      const p = `${v}/${LOG_FOLDER}/${this.server.className || "LOG"}`;
      await FileManager.checkPathToFolder(p, null, true).then(vv => {
        this.appPath = vv;
        this.initResolve();
      }).catch(e => {
        console.error(e);
        this._w(false);
      })
    }).catch(e => {
      console.error(e)
      this._w(false);
    })
  }

  initResolve() {
    if (this._w) {
      this._w(true);
      delete this._w;
    }
  }

  debug(mess, obj) {
    mess = this._getMessage(mess, error);
    if (mess.indexOf("UnhandledPromiseRejectionWarning") > -1)
      this.error(mess, obj)
    else this._print(mess, "debug");
  }

  info(mess, obj) {
    mess = this._getMessage(mess, obj);
    if (mess.indexOf("UnhandledPromiseRejectionWarning") > -1)
      this.error(mess, obj)
    else this._print(mess, "info");
  }

  error(mess, error) {
    mess = this._getMessage(mess, error);
    this._print(mess, "error");
  }

  _print(mess, type = "error" | "info" | "debug") {
    if (this.logger) this.logger[type](mess);
    else console[type](mess);
  }

  _getMessage(mess, value,) {
    const getMessError = (message) => {
      if (message instanceof ReferenceError || message instanceof TypeError) {
        if (message.fileName) message = `${message.fileName} => message: ${message.message}:${message.lineNumber}  stack: \n ${message.stack}`;
        else {
          const arr = message.stack.split("\n")

          if (arr.length > 1) {
            const nameFile = arr[1].substring(arr[1].lastIndexOf("/") + 1, arr[1].length - 1);
            message = `${nameFile} => message: ${message.message}  stack: \n ${message.stack}`;
          }
        }
      }
      return message;
    }

    mess = getMessError(mess);
    if (mess.constructor.name !== "String") {
      mess = JSON.stringify(mess);
    }
    value = getMessError(value);
    if (value && typeof value !== "string") mess += "\n " + JSON.stringify(value);
    return mess;
  }


}

module.exports = BLogger;
