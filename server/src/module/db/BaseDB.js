const BModule = require("../BModule")

class BaseDB extends BModule {

    async insert(...params) {

    }

    async query(...params) {

    }

    async update(...params) {

    }

    async remove(...params) {

    }

    isMongoDB() {
        return this.name.startsWith("mongo")
    }


    //@description only for mongo DB
    getModel(name, schema) {
    }

}

module.exports = BaseDB;