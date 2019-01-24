'use strict';
const nodemailer = require('nodemailer');
const BModule = require("../BModule");

class MailerModule extends BModule {


    init() {
        MailerModule.inst = this;

        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            this.transporter = nodemailer.createTransport({
                host: this.subConfig.host,
                port: this.subConfig.port,
                secure: this.subConfig.secure, // true for 465, false for other ports
                auth: {
                    user: this.subConfig.user, // generated ethereal user
                    pass: this.subConfig.password // generated ethereal password
                }
            });

            // setup email data with unicode symbols
            /* let mailOptions = {
                 from: '"Fred Foo 👻" <foo@example.com>', // sender address
                 to: 'bar@example.com, baz@example.com', // list of receivers
                 subject: 'Hello ✔', // Subject line
                 text: 'Hello world?', // plain text body
                 html: '<b>Hello world?</b>' // html body
             };

             // send mail with defined transport object
             transporter.sendMail(mailOptions, (error, info) => {
                 if (error) {
                     return console.log(error);
                 }
                 console.log('Message sent: %s', info.messageId);
                 // Preview only available when sending through an Ethereal account
                 console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                 // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                 // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
             });*/
        });
        this.initResolve();
    }

    send(data) {
        return new Promise((ok, bad) => {
            if (MailerModule.inst) {
                MailerModule.inst.transporter.sendMail(data, (error, info) => {
                    if (error) {
                        MailerModule.inst.logger.error(error);
                        bad(error);
                    } else {
                        ok(info)
                    }
                });
            } else {
                MailerModule.inst.logger.error("Mailer are not found!!");
                bad("Mailer are not found!!")
            }
        });
    }

    async sendText(text, to = null, from = null, subject = null, html = null) {
        to = to || this.subConfig.to;
        const mailOptions = {
            from: from, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html: html // html body
        };
        await this.send(mailOptions);
    }

    static send(data) {
        MailerModule.inst.send(data);
    }

    static sendText(text, to = null, from = null, subject = null, html = null) {
        MailerModule.inst.sendText(text, to, from, subject, html);
    }


}

module.exports = MailerModule;