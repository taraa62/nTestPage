const passport = require('passport');
const BModule = require("../BModule")


class Passport extends BModule {

    init() {
        this.passport = passport;
        this.staticDB = this.getModule("staticDB");
        this.localDB = this.getModule("localDB");
        this.strategies = {};


        try {
            for (let strag in this.subConfig.strategy) {
                if (this.subConfig.strategy[strag].path) {
                    const _m = require(this.subConfig.strategy[strag].path);
                    this.strategies[strag] = new _m(this.subConfig.strategy[strag], this, this.getWaitInit())
                }
            }
        } catch (e) {
            console.log(e);
            this.logger.error(e);

        }
        this.initResolve();

    }

    endInit() {
        this.server.app.use(passport.initialize());
        this.server.app.use(passport.session());

        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser(async (id, done) => {
            var user = await model.service.getUserInfoId(id);
            if (user) done(null, user[0]);
        });

        Object.values(this.strategies).map(v => v.endInit());
    }

    getStrategies(name) {
        return (this.strategies[name]) ? this.strategies[name] : null;
    }
}

    module.exports = Passport;