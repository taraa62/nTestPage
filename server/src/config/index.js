module.exports = {
    nameApp: "runner",
    version: "0.0.1",
    mode: "dev",
    path: "./Server",
    type: "server",
    // contentTypes: require("./content-type"),
    server: {
        port: 8082,
        x_powered_by: "mask",
        listDisableRoute: ['/', '/favicon.ico'],
        corsWhitelist: ['http://localhost:4200', 'http://localhost:8080', "*"],
    },
    initModuleBeforeRunServe: [
        {
            isUse: true,
            type: "logger",
            name: "winston",
            path: "../module/logger/winston",
            config: {
                LOG_FOLDER: "./"
            }
        }, {
            isUse: false,
            type: "glSafe",
            name: "globalSafer",
            path: "./db/GlobalSaveInfo",
            config: {
                pathForOtherLogInfo: "./CONFIG/GlobalSaveInfo.log"
            }
        }, {
            isUse: false,
            type: "localDB",
            name: "redisDB",
            path: "./db/redis/RedisDBModule",
            config: {
                debug: false,
                timeStoreSecondTest: 3000,
                host: "localhost",
                port: 6379
            }
        }, {
            isUse: false,
            type: "other",
            name: "myCache",
            path: "./db/myCache/MyCache",
            config: {}
        },
        {
            isUse: false,
            type: "staticDB",
            name: "mongoodb",
            path: "./db/mongodb/MongoDBModule",
            config: {
                debug: true,
                url: "mongodb://localhost:27017/test"
            }
        }, {
            isUse: false,
            type: "authorization",
            name: "passport",
            path: "./passport/Passport",
            config: {
                strategy: {
                    google: {
                        path: "./passportGoogle/PassportGoogleStrategy",
                        clientID: "667454222218-8a54nr6uqndqgps6h6bpdl78sr9939d7.apps.googleusercontent.com",
                        clientSecret: "fHiZFeTuCuuf8rw9DPeZhwFo"
                    },
                    jwt: {
                        path: "./passportJWT/PassportJWTStrategy",
                        jwtsecret: "t62SecretKey",
                        expiresIn: 500000,
                        comment: "expiresIn - in second",
                        lengthResetKey: 7, //symbols in reset key
                        timeForResetKey: 5 //minute for reset key
                    }
                }
            },
            comment: "initialization after initialization all DB (if use)!!!"
        }, {
            isUse: true,
            type: "route",
            name: "route",
            path: "./route/RouteModule",
            config: {
                isUseHttpRoute: true,
                isUseSocketRoute: true,
                httpControllers: {
                    // user: "./controllers/base/http/PassportJWTController",
                    // google: "./controllers/base/http/PassportGoogle",
                    test: "./controllers/base/http/Test",
                    terminal: "./controllers/terminal/http/TerminalController",
                    donor: "./controllers/donor/http/DonorController"
                },
                socketControllers: {
                    test: "./controllers/base/socket/Test",
                    terminal: "./controllers/terminal/socket/TerminalController",
                }
            },
            comment: "initialization after initialization module authorization!!!"
        }, {
            isUse: false,
            type: "other",
            name: "mailer",
            path: "./mailer/MailerModule",
            config: {
                host: "smtp.gmail.com",
                port: 587,
                user: "",  //your email
                password: "",  //your password
                secure: false,   // true for 465, false for other ports,
                to: ""
            }
        },
        {
            isUse: true,
            type: "other",
            name: "cmd_utils",
            path: "./cmdUtils/CMDUtilsModule",
            config: {}
        },
        {
            isUse: false,
            type: "other",
            name: "restartServer",
            path: "./restart/RestartModule",
            config: {
                watchEditFile: "./CONFIG/general.js",
                // watchEditFolder: "./CONFIG", //it is not use!!!!!
                delayRestartServer: 2000
            }
        }, {
            isUse: false,
            type: "other",
            name: "generatorConfig",
            path: "./donor_settings/GeneratorConfigModule",
            config: {
                baseConfig: "./../../../CONFIG/defaultConfig",
                generateConf: "CONFIG/generator/generateConf.json",
                confFolder: "CONFIG/testConf"
            }
        }

    ],
    initModuleAfterRunServe: [
        {
            isUse: false,
            type: "socket",
            name: "socket.io",
            path: "./socket/SocketModule",
            configS: {
                serveClient: false,
                path: '/events',
                // below are engine.IO options
                pingInterval: 10000,
                pingTimeout: 5000,
                cookie: false
            },
            config: {
                listen: "mess",  //подія, яку будем слухати коли повідомлення прийде від кліента(def=mess)
                send: "news", //подія, на яку ми будемо відсилати повідомлення клієнту (def=news),
                isCheckAuthorize: false //провіряти авторизацію?
            }
        }
    ]

}
