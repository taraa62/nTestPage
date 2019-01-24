const BaseDB = require("../BaseDB")
const mongoose = require('mongoose');
const crypto = require('base');
const Schema = mongoose.Schema;


/*
    Для початку роботи потрібно взяти Model і зберірати в себе
    далі передавати цю модель для проведення дій

*/

//https://metanit.com/web/nodejs/6.7.php
class MongoDBModule extends BaseDB {

    async init() {
        mongoose.Promise = Promise; // Просим Mongoose использовать стандартные Промисы
        mongoose.set('debug', this.config.debug);  // Просим Mongoose писать все запросы к базе в консоль. Удобно для отладки кода
        await mongoose.connect(this.subConfig.url, {
            useCreateIndex: true,
            useNewUrlParser: true
        }); // Подключаемся к базе test на локальной машине. Если базы нет, она будет создана автоматически.
        this.initResolve();
    }

    async destroy() {
        try {
            await mongoose.disconnect();
        } catch (e) {
            //TODO error disconnect mongo
        }

    }

    getMongo() {
        return mongoose;
    }

    getModel(name, schema) {
        return mongoose.model(name, schema);
    }


    async insert(model, data) {
        const obj = new model(data);

        return await new Promise((resolve, reject) => {
            obj.save((err, targ) => {
                if (err) reject(err);
                else resolve(targ._doc);
            })
        })
    }


    async query(model, find) {
        return await new Promise((resolve, reject) => {
            model.find(find, (err, doc) => {
                if (err) reject(err);
                else {
                    const arr = [];
                    doc.map(v => arr.push(v._doc));
                    resolve(arr);
                }
            })
        })
    }

    async update(model, findNote, replaceTo, opt = null) {
        return await new Promise((resolve, reject) => {
            model.updateMany(findNote, replaceTo, opt, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        })
    }

    async remove(model, findNote) {
        return await new Promise((resolve, reject) => {
            model.deleteMany(findNote, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        })
    }


}

module.exports = MongoDBModule;