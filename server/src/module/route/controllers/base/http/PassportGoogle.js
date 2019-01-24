const Controller = require("../../Controller")

class PassportGoogle extends Controller {

    endInit() {
        super.endInit();
        this.socketModule = this.getModule("socket");
    }

    /*  router.get('/google', passport.authenticate('google', {
      scope: ['profile']
  }));
  */

// auth with google+
    async login(req, res, next) {
        this.auth.passport.authenticate('google', {
            scope: ['profile']
        })(req, res, next);

    }

    async redirect(req, res, next) {
        const user = await new Promise((res, rej) => {
            this.auth.passport.authenticate('google', (err, user, info) => {
                if (err) {
                    rej(err);
                }
                else if (info && Object.keys(info).length>0) {
                    rej(info)
                }
                else res(user);
            })(req, res, next);

        }).then(v=>{
            if(req.headers.host){
                v._doc.host = req.headers.host;
            }
            this.socketModule.sentToSocketUsers(v._doc._id.toString(), v._doc);
        }).catch(v => {
            this.logger.error(v)
        })
            .finally(v => {

            res.redirect("close")
        })
    }

    close(req, res, next) {
        res.json({});
    }

}

module.exports = PassportGoogle;