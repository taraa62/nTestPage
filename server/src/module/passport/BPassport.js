const BModule = require("../BModule")
const userSchema = require('./passportJWT/UserSchema');

class BPassport extends BModule {

    constructor(conf, parent, _wait) {
        super(conf, parent, _wait);

    }

    endInit() {
        this.passport = this.server.passport;
        this.staticDB = this.getModule("staticDB");
        this.localDB = this.getModule("localDB");

        this.userModel = null;
        if (this.staticDB && this.staticDB.isMongoDB()) {
            this.userschema = userSchema;
            this.userModel = this.staticDB.getModel("User", userSchema);
        }
    }

    //все добре, оформляємо відповідь!!!
    SUCCESS(req, res, data) {
        res.status = 200;
        let resp = {
            status: "ok",
            data: data
        };
        res.json(resp);
    }

   /* //сталась якась наша вгутрішня помилка!!!
    ERROR(req, res, err) {
        res.status = 200;
        let resp = err.message || err;
        if (typeof resp === "string") {
            resp = {msg: resp};
        }
        resp.status = "error";
        res.json(resp);
    }*/

    notAuthPoint(req, res, err) {
        res.status = 200;
        let resp = {
            status: "error",
            msg: err
        };
        res.json(resp);
    }

}

module.exports = BPassport;
//https://gist.github.com/joshbirk/1732068


