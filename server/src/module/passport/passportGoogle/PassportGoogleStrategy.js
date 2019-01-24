const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BPassport = require("../BPassport")


class PassportGoogleStrategy extends BPassport {

    endInit() {
        super.endInit();
        this.passport.use(new GoogleStrategy({
                // options for google strategy
                clientID: this.config.clientID,
                clientSecret: this.config.clientSecret,
                callbackURL: 'http://localhost:8080/google/redirect'
            }, async (accessToken, refreshToken, profile, done) => {

                await this.findUser(profile).then(async v => {
                    if (v) {
                        done(null, v);
                    } else {
                        await this.createNewUser(profile).then((newUser) => {
                            console.log('created new user: ', newUser);
                            done(null, newUser);
                        }).catch(v => {
                            this.logger.error(v);
                            return done(v, null);
                        });
                    }
                }).catch(v => {
                    this.logger.error(v);
                    return done(v, null);
                });
            })
        );
    }

    async findUser(profile) {
        return await new Promise((res, rej) => {
            if (this.staticDB && this.staticDB.isMongoDB()) {
                this.userModel.findOne({strategyID: profile.id}).then((currentUser) => {
                    if (currentUser) {
                        res(currentUser);
                    } else {
                        res(null);
                    }
                }).catch(v => rej(v));
            }
        })

    }

    async createNewUser(profile) {
        return await new this.userModel({
            strategy: "google", //стратегія авторизації (local/google)
            strategyID: profile.id, //id стратегії, якщо є
            displayName: profile.displayName, //ім"я юзера, якщо є
            password:profile.id
        }).save();
    }

}


//http://localhost:8080/google/login
module.exports = PassportGoogleStrategy;