class ErrorT62 {

    constructor() {
        this.info = new ErrorInfo();

    }


    error(response, logger, errMess = null, errCode = null) {
        let res = null;
        if (errMess) {
            if (errMess.length < 1) {
                errMess = "undefined";
                res = null;
            }
            else res = this.info.searchMess(errMess);
        } else res = this.info.searchCode(errCode);

        if (res) {
            response.status = res.respStat || 200;
            res = {
                status: res.status,
                code: res.code,
                msg: res.msg
            }
        } else {
            response.status = 505;
            res = {status: "error", code: 999, msg: errMess || errCode}
            if (logger) {
                logger.error(errMess);
            }
        }
        return res;
    }


}


class ErrorInfo {

    constructor() {
        this.info = [
            {errMsg: "No auth token", msg: "No auth token", errCode: -1, status: "fail", code: 401, respStat: 200},
            {errMsg: null, msg: "Duplicate login", errCode: 11000, status: "fail", code: 406, respStat: 200},
            {errMsg: "User does not exist or wrong password", msg: "User does not exist or wrong password", errCode: -1, status: "fail", code: 406, respStat: 200},
            {errMsg: "User is not found", msg: "User is not found", errCode: -1, status: "fail", code: 406, respStat: 200},
            {errMsg: "request is invalid", msg: "request is invalid", errCode: -1, status: "error", code: 400, respStat: 200},
            {errMsg: "key is invalid", msg: "key is invalid", errCode: -1, status: "fail", code: 406, respStat: 200},
            {errMsg: "error init module on server", msg: "error init module on server", errCode: -1, status: "error", code: 500, respStat: 200},

        ]


    }

    searchMess(mess) {
        for (let a of this.info) {
            if ( mess.startsWith(a.errMsg)) {
                return a;
            }
        }
        return null;
    }

    searchCode(code) {
        for (let a of this.info) {
            if (a.errCode === code) {
                return a;
            }
        }
        return null;
    }

}

module.exports = new ErrorT62();