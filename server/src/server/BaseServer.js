const utils = require("../utils/UtilsInitializators");
const helmet = require('helmet');
const express = require('express');
const cors = require('cors');
const http = require('http');
const BModule = require("../module/BModule")
const ControllerModule = require("../module/ControllerModule");
const Timers = require('../utils/TimerUtils');
const pathUtils = require('../utils/FileManager')
const cookieSession = require('cookie-session');
const EventEmitter = require('events').EventEmitter;


require("../config/localization/LocalizeController");


class BaseServer {

  constructor() {
    process.env.utils = utils;

    this.logger = null;
    this._init();

  }

  _init() {
    this.config = require("../config/index");
    this.waitContoll = new utils.UtilsPromise.UtilPromiseAll();
    process.env.projectFolder = utils.FileManager.backFolder(__dirname, 2);
    this._initLogger();

    this.EE = new EventEmitter();

    this._endInit();

     this._initListener();
    this.waitContoll.runResolve(() => {
      console.log("----- init all")
      Object.keys(this.modules).map(v => {
        if (v === 'other') Object.values(this.modules[v]).map((c => c.endInit()))
        else this.modules[v].endInit()
      });
    }, (err) => {
      this.toLogger("error", err);
      this.stop();
    });
  }

  _initLogger() {
    const confLogger = this.getConfigModule("logger");
    if (confLogger && confLogger.isUse) {
      const cl = require(confLogger.path);
      this.logger = new cl(confLogger, this, this.waitContoll.getWaitInit());
    }
  }

  _endInit() {
    this._express = express;
    this.app = express();
    this.modules = {
      other: {}
    };
    this.app.set('trust proxy', 1) // trust first proxy
    this.app.use(helmet());

    // set up session cookies
    this.app.use(cookieSession({
      maxAge: 24 * 60 * 60 * 1000,
      keys: ["thenetninjaisawesomeiguess"]
    }));

    this.app.use(require('cookie-parser')());

    /** setting for 'x-powered-by'
     x_powered_by === "mask" - create to app a PHP mask
     x_powered_by === "off" - simple disable x_powered_by
     other params enabled this parameter
     */
    if (this.config.server.x_powered_by === "off") this.app.disable('x-powered-by');
    else if (this.config.server.x_powered_by === "mask") {
      this.app.use((req, res, next) => {
        res.set('X-Powered-By', 'PHP/7.1.2-1+b1');
        next();
      });
    }
    //** disable route
    const disable = require("../module/route/DisableRoute")(this.config);
    if (disable) this.app.use(disable);
    //** logger
    /* if (process.env.NODE_ENV === dev)
         this.app.use(morgan('dev'));*/

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));


    // set view engine
    this.app.set('views', [process.env.projectFolder + '/views']);
    this.app.set('view engine', 'ejs');

    this.app.use('/terminal', express.static(process.env.projectFolder + "/views/terminal"));

    //** CORS **
    if (this.config.corsWhitelist) {
      var whitelist = this.config.corsWhitelist;
      var corsOptions = {
        origin: function (origin, callback) {
          if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS =>' + origin))
          }
        }
      }
      this.app.use(cors(corsOptions));
    } else {
      this.app.use(cors());
    }

    this.start();
  }

  start() {
    this.initModuleBeforeStart();
    this.port = process.env.PORT || this.config.server.port || 8080;
    this.server = http.createServer(this.app);
    this.server.listen(this.port, async () => {
      // console.log(`serve listener ${ this.port}`);
      this.logger.info(`serve listener ${this.port}`);
      this.initModuleAfterStart();
    });
  }

  initModuleBeforeStart() {
    if (this.config.initModuleBeforeRunServe) {
      this.config.initModuleBeforeRunServe.map(async v => {
        if (v.type !== "logger") {
          const modul = await new Promise((res, rej) => {
            const m = ControllerModule.getAndInitModule(v, this, res);
            if (m) {
              if (v.type === 'other') this.modules.other[v.name] = m;
              else this.modules[v.type] = m;
            } else res(true)
          });
          this.waitContoll.pushPromise(modul);
        }
      });
    }
    console.log("init before")
  }

  initModuleAfterStart() {
    if (this.config.initModuleAfterRunServe) {
      this.config.initModuleAfterRunServe.map(v => {
        const modul = new Promise((res, rej) => {
          const m = ControllerModule.getAndInitModule(v, this, res);
          if (m) {
            if (v.type === 'other') this.modules.other[v.name] = m;
            else this.modules[v.type] = m;
          } else res(true)
        });
        this.waitContoll.pushPromise(modul);
      });
    }
  }


  getConfigModule(name) {
    let arr = this.config.initModuleBeforeRunServe.filter(v => v.type === "logger" && v.isUse);
    if (arr.length < 1) arr = this.config.initModuleAfterRunServe.filter(v => v.type === "logger" && v.isUse);
    if (arr.length > 0) return arr[0];
    return null;
  }
  getModule(name) {
    let res = this.modules[name] || null;
    if (!res) {
      res = this.modules.other[name] || null;
    }
    return res;
  }
  /*
        беремо з глобального конфіга будь який конфіг модуля не залежно від того чи включений він чи ні
     */
  getConfigWithGlobal(type = null, name = null) {
    if (type || name) {
      const check = (v) => {
        let res = null;
        if (type && name) {
          if (type === v, type && name === v, name) {
            res = v;
          }
        } else {
          if (type) if (v.type === type) res = v;
          if (name) if (v.name === name) res = v;
        }
        return res;
      }
      let arr = this.config.initModuleBeforeRunServe.filter(v => check(v));
      if (arr.length < 1) arr = this.config.initModuleAfterRunServe.filter(v => check(v));
      if (arr.length > 0) return arr[0];
      return null;
    }
  }


  _initListener() {
    process.on('exit', async (code) => {
      this.toLogger("info", `About to exit with code: ${code}`);
      if (!this.isDestroy)
        await this.stop();
    });
    process.on('disconnect', async (code) => {
      this.toLogger("info", `disconnect: ${code}`);

      if (!this.isDestroy)
        await this.stop();
    });
    process.on('uncaughtException', async (code) => {
      this.toLogger("error", `uncaughtException: ${code}`);

      process.exit(0);
    });
    process.on('SIGINT', async () => {
      this.toLogger("info", `SIGINT`);
      if (!this.isDestroy)
        await this.stop();
    });
  }

  toLogger(type = "error" | "info" | "debug", ...args) {
    args.map(v => {
      if (this.logger) this.logger[type](v);
      else console[type](v);
    })
  }


  async stop() {
    this.isDestroy = true;
    //Timers.clearTimeoutAll();
    for (let m in this.modules) {
      if (m === "other") {
        for (let t in this.modules[m]) {
          const mod = this.modules[m][t];
          if (mod.destroy) {
            await mod.destroy();
          }
        }
      } else {
        if (this.modules[m].destroy) {
          await this.modules[m].destroy();
        }
      }
    }
    setTimeout(() => {
      this.server.close(() => {
        console.log("---------SERVER STOP ------------");
        this.logger.info("Server destroy!")
        process.exit(0);

      });
    }, 1000);
  }

}

module.exports = BaseServer;
