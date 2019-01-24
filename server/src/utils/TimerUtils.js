const version = 1.0;
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

const listTimer = [];

class TimerUtils {


    static async setTimeout(callback, time, ...params) {
        // const id = setTimeout(callback, time, ...params);
        // listTimer.push(id);

        await setTimeoutPromise(time, params).then((value) => {
            callback(params)
        });


        //  return id;
    }

    static clearTimeoutAll() {
        /*listTimer.map(v => {
            clearTimeout(v);
        })*/
    }
}

module.exports = TimerUtils;