const Controller = require('../../Controller');
const jwt = require('jsonwebtoken'); // auth via JWT for hhtp

class Test extends Controller {

    endInit() {
        super.endInit();


    }

    async test(req, res, nesx) {
        res.send("hello")
    }

    //get
    async notCheckAuth(req, res, next) {
        res.send("notCheckAuth")
    }

    //get
    async checkAuth(auth, req, res, next) {
        res.send("checkAuth")
    }

    //get  //return register form page
    async register(req, res, next) {
        res.render('test/register');
    }

    //post
    async signup(req, res, next) {
        await new Promise(async (resolve, reject) => {
            await this.auth.passport.authenticate('signup', (err, user) => {
                (err) ? reject(err) : resolve(user);
            })(req, res, next);
        }).then((val) => {
            res.send("signup")
        }).catch((err) => {
            this.ERROR(req, res, err);
        })
    }

    //post
    async login(req, res, next) {
        await new Promise(async (resolve, reject) => {
                await this.auth.passport.authenticate('login', {session: false}, (err, user, message) => {
                    try {
                        if (err || !user) {
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
                res.json(val.m)
            } else {

                res.json(val.u);
            }
        }).catch((err) => {
            this.ERROR(req, res, err);
        })
    }

    async custom(auth, req, res, next) {
        /*await passport.authenticate('jwt', function (err, user) {
            if (user) {
                ctx.body = "hello " + user.email;
            } else {
                ctx.body = "No such user";
                console.log("err", err)
            }
        } )(ctx, next)

        await new Promise(async (resolve, reject) => {
                await this.auth.passport.authenticate('jwt', {session: false}, (err, user, mess) => {
                    (err) ? reject(err) : resolve(user);
                })(req, res, next);
            }).then((val) => {
                if (!val) {
                    //TODO ми не пройшли провірку!!!!
                    this.ERROR(req, res, "час токену закінчився!!!");
                } else {
                    res.json({m:"hello"})
                }
            }).catch((err) => {
                this.ERROR(req, res, err);
            })*/
        res.json({m:"hello"})
        //res.render("test/custom");
    }


    delete(req, res, next){
        console.log("delete")
    }


//ovveride
    notAuthPoint(req, res, next) {
        res.send("You is not authorization!!! send TEST controller")
    }

}

module.exports = Test;