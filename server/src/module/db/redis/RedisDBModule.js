const BaseDB = require("../BaseDB");
const redis = require("redis");

class RedisDBModule extends BaseDB {

    endInit() {
        this.client = redis.createClient(this.subConfig.port, this.subConfig.host);
        redis.debug_mode = this.subConfig.debug;

        this.client.on('error', function (err) {
            console.log(err);
            //TODO подумати що робити з бд// можливо реконект чи іще яку біду!!!
        });

        this.client.on("connect", function () {
            console.log("we are connected to redis db");
        });
        if (this.subConfig.debug) {
            this.client.on("monitor", function (time, args, raw_reply) {
                console.log(time + ": " + args);
            });
        }
    }

    // client.set('foo', 123, 'bar', function (err, res) { // Too many arguments
    async insert(key, value) {
        return await this.client.set(key, value, "EX", this.subConfig.timeStoreSecondTest);
    }

    async insertWithTime(key, value, time) {
        if (!time || time < 1) return;
        return await this.client.set(key, value, "EX", time);
    }


    async query(key) {
        return await new Promise((res, rej) => {
            this.client.get(key, (err, data) => {
                if (err) rej(err);
                res(data);
            });
        })

    }

    async update(key, value) {
        return await this.insert(key, value);
    }

    async remove(key) {
        return await new Promise((res, rej) => {
            this.client.del(key, (err) => {
                if (err) rej(err);
                else res(true);
            });
        })
    }

    async clearDB() {
        return await new Promise((res, rej) => {
            this.client.flushdb((err, succes) => {
                if (err) rej(err);
                else res(succes);
            });
        })
    }

    async destroy() {
        await new Promise(r => {
            process.nextTick(function () {
                // Force closing the connection while the command did not yet return
                this.client.end(true);
                this.client.quit();
                r();
            });
        })
    }

}


module.exports = RedisDBModule;