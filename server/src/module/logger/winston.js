'use strict';
const BLogger = require("./BLogger")
/**
 * Logger module.
 *
 * Usage:
 *
 *
 */

const Winston = require('winston');

const fs = require('fs');

class WinstonLogger extends BLogger {

  constructor(config, server = null, _wait = null) {
    super(config, server, _wait);
  }

  async init() {
    await super.init();

    if (!fs.existsSync(this.appPath)) {
      fs.mkdirSync(this.appPath);
    }

    // console.log("appPath=> ", this.appPath);

    this.logger = new (Winston.Logger)({
      transports: [
        new (Winston.transports.Console)({
          colorize: true,
          timestamp: true,
          level: 'debug',
          label: this.forClassName
        }),
        new (Winston.transports.File)({
          level: 'info',
          name: 'info-logs',
          createDirectory: true,
          timestamp: true,
          filename: `${this.appPath}/info.log`,
          json: false
        }),
        new (Winston.transports.File)({
          level: 'error',
          name: 'error-logs',
          createDirectory: true,
          maxsize: 104857600,
          timestamp: true,
          filename: `${this.appPath}/errors.log`,
          json: false
        })
      ]
    });
  }
}


module.exports = WinstonLogger;

