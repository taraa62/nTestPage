/**
 * compare 2 objects
 * @param x
 * @returns {boolean}
 */

const version = 1.0;

const equals = function (x, y) {
    var p;
    for (p in y) {
        if (typeof(x[p]) === 'undefined') {
            return false;
        }
    }

    for (p in y) {
        if (y[p]) {
            switch (typeof(y[p])) {
                case 'object':
                    if(y[p].equals){
                        if (!y[p].equals(x[p])) {
                            return false;
                        }
                    }else {
                        if(x[p].equals){
                            if (!x[p].equals(y[p])) {
                                return false;
                            }
                        }
                    }
                    break;
                case 'function':
                    if (typeof(x[p]) === 'undefined' ||
                        (p !== 'equals' && y[p].toString() !== x[p].toString()))
                        return false;
                    break;
                default:
                    if (y[p] !== x[p]) {
                        return false;
                    }
            }
        } else {
            if (x[p])
                return false;
        }
    }

    for (p in x) {
        if (typeof(y[p]) === 'undefined') {
            return false;
        }
    }

    return true;
}

module.exports.equals = equals;

module.exports.copyObject = (to, from)=>{
    Object.keys(from).map(v => {
        if (from[v].constructor.name === "Object") {
            to[v] = Object.assign({}, from[v]);
            this.copyObject(to[v], from[v]);
        }
    })
    return to;
}
