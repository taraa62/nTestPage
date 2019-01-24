const BaseDB = require("../BaseDB");


class MyCacheDB extends BaseDB {

    endInit() {
        this.db = {};
    }

    // client.set('foo', 123, 'bar', function (err, res) { // Too many arguments
    async insert(key, value, isRewrite = true) {
        return new Promise((res, rej) => {
            if (isRewrite) this.db[key] = value;
            else {
                if (this.db[key]) this.db[key] = value;
                else {
                    return rej("MyCacheDB: key is not empty!")
                }
            }
            res();
        })
    }


    async query(key) {
        return new Promise((res, rej) => {
            if (this.db[key])
                return res(this.db[key]);

            rej("MyCacheDB: key is not found");
        })
    }

    async update(key, value) {
        return new Promise((res, rej) => {
            if (this.db[key]) this.db[key] = value;
            else return rej("MyCacheDB: key is not found");
            res();
        });
    }

    async remove(key) {
        return new Promise((res) => {
            delete this.db[key];
            res();
        })
    }

    async clearDB() {
        this.db = {};
    }

    async destroy() {
        this.db = {};
        super.destroy();
    }

}


class MyCache extends BaseDB {
    getNewDB() {
        const db = new MyCacheDB(this.config, this.server);
        db.endInit();
        return db;
    }

}

module.exports = MyCache;
