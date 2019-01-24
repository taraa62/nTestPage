const version = 1.0;

const check = function (val) {
    if (!val) return false;
    if (val.length < 1) return false;
    if (typeof val != "string") return false;
    switch (val) {
        case "null":
        case "undefined":
            return false;

    }
    return true;
}
String.prototype.replaceAll = function (search, replacement) {
    const target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.indexOfAll = function (search) {
    const _t = this;
    const res = [];
    let i = -1;

    while (i > -10) {
        let ind = _t.indexOf(search, i + 1);
        if (ind < 0) i = -100;
        else {
            i = ind;
            res.push(ind);
        }
    }
    return res;
}

String.prototype.checkText = function (typeSearch, search) {
    const target = this;
    switch (typeSearch) {
        case "indexOf":
            return target.indexOf(search) > -1;
            break;
        case "startsWith":
            return target.startsWith(search);
            break;
        case "endsWith":
            return target.endsWith(search);
            break;
        case "exactly":
            return target === search;
    }

    return false;
}


//job with map
String.prototype.indexOfMap = function (array) {
    if (array && array.constructor.name === "Array") {
        const target = this;
        for (let f of array) {
            if (target.indexOf(f) > -1) return f;
        }
    }
    return null
}
String.prototype.startsWithMap = function (array) {
    if (array && array.constructor.name === "Array") {
        const target = this;
        for (let f of array) {
            if (target.startsWith(f)) return f;
        }
    }
    return null
}
String.prototype.endsWithMap = function (array) {
    if (array && array.constructor.name === "Array") {
        const target = this;
        for (let f of array) {
            if (target.endsWith(f)) return f;
        }
    }
    return null
}
String.prototype.exactlyMap = function (array) {
    if (array && array.constructor.name === "Array") {
        const target = this;
        for (let f of array) {
            if (target === f) return f;
        }
    }
    return null
}


module.exports.isString = check;