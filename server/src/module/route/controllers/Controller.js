/**
 * для того щоб увімкнути перевірку на авторизацію потрібно підключити відповідний модуль, який буде обробляти
 * реєстрацію і авторизацію юзера
 * для кінцевих точок, для яких потрібна провірка, необхідно добавити 4 параметр в аргументи
 * Приклад
 * *без провірки
 * async signup(req, res, next) {
 * * з провіркою
 * async custom(auth, req, res, next) {
 */

const ErrorT62 = require("../../error/ErrorT62");

class Controller {

    constructor(controller) {
        this.controller = controller;
        this.logger = controller.getControllerLogger();
    }

    endInit() {
        this.auth = this.getModule('authorization');
    }

    async run(action, req, res, next) {
        const targ = this[action];
        if (targ) {
            if (typeof targ !== 'function') {
                //TODO add error to logger!!!!
                return next();
            } else {
                if (targ.length == 4) { //додатковий параметр який вказує на те чи потрібно робити провірку на авторизацію
                    await this._checkAuth(req, res, next).then(v => {
                        if (v) this[action](v, req, res, next);
                        else this.notAuthPoint(req, res, next)
                    }).catch(err => this.ERROR(req, res, err));
                } else {
                    await this[action](req, res, next);
                }
                return true;
            }
        } else {
            //TODO add error to logger!!!!
            return next();
        }
    }

    getModule(name) {
        return this.controller.getModule(name);
    }


    async _checkAuth(req, res, next) {
        return new Promise((resolve, reject) => {
            if (this.auth) {
                this.auth.passport.authenticate('jwt', (err, user, mess) => {
                    if (err || mess) {
                        reject(err || mess);
                    }
                    else {
                        resolve((user) ? user : null);
                    }
                })(req, res, next);
            } else reject(null);
        })

    }

    /**
     * Попадаємо сюда по дефолту якщо ми не авторизовані, чи сталась якась помилка під час провірки
     * якщо відомий контроллер, то можемо переоприділити і поставити власну поведінку
     * @param req
     * @param res
     * @param next
     */
    notAuthPoint(req, res, err) {
        res.status = 400;
        res.json(err);
        //res.send("You is not authorization!!!")
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

    //сталась якась наша вгутрішня помилка!!!
    ERROR(req, res, err = null, code = null) {
        //  this.logger.error(err);
        const e = (err) ? err.message || err.mess || err : null;
        res.json(ErrorT62.error(res, this.logger, e, code));
    }

}

module.exports = Controller;