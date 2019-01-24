const Controller = require("../../Controller");


class PassportJWTController extends Controller {

    endInit() {
        super.endInit();
        this.jwt = (this.auth) ? this.auth.getStrategies("jwt") : null;

    }

    //post
    async signup(req, res, next) {
        if (!this.auth) {
            next();
        } else {
            await new Promise(async (resolve, reject) => {
                await this.auth.passport.authenticate('signup', (err, user, mess) => {
                    if (mess) err = {mess: mess};
                    (err) ? reject(err) : resolve(user);
                })(req, res, next);
            }).then((val) => {
                this.SUCCESS(req, res, val);
            }).catch((err) => {
                if (err && err.code) {
                    this.ERROR(req, res, null, err.code)
                } else this.ERROR(req, res, err);
            })
        }
    }

    //post
    async login(req, res, next) {
        if (!this.auth) {
            next();
        } else
            await new Promise(async (resolve, reject) => {
                    await this.auth.passport.authenticate('login', {session: false}, (err, user, message) => {
                        try {
                            if (err) {
                                const error = new Error('An Error occured')
                                return reject(error);
                            }
                            resolve({u: user, m: message});
                        } catch (error) {
                            return next(error);
                        }


                    })(req, res, next);
                }
            ).then((val) => {
                if (!val.u) {
                    this.ERROR(req, res, val.m);
                } else {
                    this.SUCCESS(req, res, val.u);
                }
            }).catch((err) => {
                this.ERROR(req, res, err);
            })
    }

    //post
    async reset(req, res, next) {
        const email = req.body.email;
        if (!email) {
            this.ERROR(req, res, "request is invalid");
        }
        if (this.jwt) {
            await new Promise(async (res, rej) => {
                await this.jwt.resetPassword(req.body, res, rej);
            }).then(v => {
                if (req.body.test) this.SUCCESS(req, res, v);
                else this.SUCCESS(req, res, "SUCCESS");
            }).catch(err => {
                this.ERROR(req, res, err);
            })
        } else {
            this.ERROR(req, res, "error init module on server");
        }
    }

    //post
    async updatepass(req, res, next) {
        if (this.jwt) {
            await new Promise(async (res, rej) => {
                await this.jwt.updatePassword(req.body, res, rej);
            }).then(v => {
                this.SUCCESS(req, res, "SUCCESS");
            }).catch(err => {
                this.ERROR(req, res, err);
            })
        } else {
            this.ERROR(req, res, "error init module on server");
        }
    }

    async check(auth, req, res, next) {
        this.SUCCESS(req, res, auth);
    }


    async custom(auth, req, res, next) {
        res.json({m: "hello"})
    }


}

module.exports = PassportJWTController;