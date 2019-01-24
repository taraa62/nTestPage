const BPassport = require("../BPassport");
const randString = require("../../../utils/Other").randomString;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy; // Auth via JWT
const ExtractJwt = require('passport-jwt').ExtractJwt; // Auth via JWT
const jwt = require('jsonwebtoken'); // auth via JWT for hhtp
const Mailer = require("../../mailer/MailerModule");
const LocalizeController = require("../../../config/localization/LocalizeController");
const Server = require("../../../server/Server");

class PassportJWTStrategy extends BPassport {

    init() {
        this.initResolve();
    }

    endInit() {
        super.endInit();

        //Create a passport middleware to handle user registration
        this.passport.use('signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
            session: false
        }, async (req, email, password, done) => {
            try {

                let user = null;
                //Save the information provided by the user to the the database
                if (this.staticDB && this.staticDB.name.startsWith("mongo")) {
                    const nUser = {
                        email: email,
                        password: password,
                        strategy: "local"
                    };
                    await this.staticDB.insert(this.userModel, nUser).then((val) => user = val);
                }
                if (user) {
                    user = await this.setToken(user);
                }
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }));

        //Create a passport middleware to handle User login
        this.passport.use('login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        }, async (req, email, password, done) => {
            try {
                //Find the user associated with the email provided by the user
                let user = await this.findUserByEmail(email);
                if (!user) {
                    //If the user isn't found in the database, return a message
                    return done(null, false, {message: 'User is not found'});
                }
                //Validate password and make sure it matches with the corresponding hash stored in the database
                //If the passwords match, it returns a value of true.
                if (!user || !user.checkPassword(password)) {
                    return done(null, false, {message: 'User does not exist or wrong password.'});
                }


                user = await this.setToken(user);
                if (!user) {
                    return done(null, false, {message: 'Undefined error!'});
                }
                return done(null, user, {message: 'Logged in Successfully'});
            } catch (error) {
                return done(error);
            }
        }));

        const jwtOptions = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            secretOrKey: this.config.jwtsecret
        };

        //This verifies that the token sent by the user is valid
        this.passport.use(new JwtStrategy(jwtOptions, async (token, done, mess) => {
            try {
                if (token.id) {
                    if (this.localDB && this.localDB.name.startsWith("redis")) {
                        const user = await this.localDB.query("bearer_" + token.id);
                        if (user) {
                            return done(null, token);
                        }
                    }
                }
                //Pass the user details to the next middleware
                return done(null, null, "User is not found");
            } catch (error) {
                return done(error);
            }
        }));
    }

    async findUserByEmail(email) {
        return (this.userModel) ? await this.userModel.findOne({email: email}) : null;
    }

    async setToken(user) {
        try {
            const _id = user._id.toString();
            const _user = {
                email: user.email,
                id: _id
            };
            const token = jwt.sign(_user, this.config.jwtsecret, {
                expiresIn: this.config.expiresIn // time in seconds
            });

            if (this.localDB && this.localDB.name.startsWith("redis")) {
                const isSave = await this.localDB.insert("bearer_" + _id, JSON.stringify(user));
                _user.token = 'bearer ' + token;
                if (isSave) {
                    return _user;
                }
            }

        } catch (e) {
            this.logger.error(e.message, JSON.stringify(user));
            return null;
        }
        return null;

    }

    async resetPassword(body, res, rej) {
        const user = await this.findUserByEmail(body.email);
        if (!user) {
            return rej("User is not found");
        } else {
            const key = randString(this.config.lengthResetKey);
            const isSave = await this.localDB.insertWithTime(key, JSON.stringify(user._doc), this.config.timeForResetKey);
            if (isSave) {
                let text = LocalizeController.getField(body.lang || "en", "resetPass");
                if (text) {
                    text = text.replace("$nameApp$", Server.inst.config.nameApp);
                    text = text.replace("$key$", key);
                    Mailer.sendText(null, null, body.email, null, text);
                } else {
                    Mailer.sendText(`In order to reset password open extension and insert your key ${key} into the field.`, null, body.email);
                }

                res(key);
            }
        }
    }

    async updatePassword(body, res, rej) {
        if (body.key && body.pass) {
            const uJSON = await this.localDB.query(body.key);
            if (uJSON) {
                this.localDB.remove(body.key);
                const user = JSON.parse(uJSON);
                const nPass = await this.userschema.methods.passToCrypto(body.pass, user.salt);
                await this.staticDB.update(this.userModel, {email: user.email}, {password: nPass}).then(v => {
                    res(v);
                }).catch(err => {
                    rej(err);
                });

            } else {
                rej("key is invalid")
            }
        } else {
            rej("request is invalid")
        }
    }

    async destroy() {
        super.destroy();
        this.userModel = null;
    }

}

module.exports = PassportJWTStrategy;