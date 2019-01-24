const _path = require('path');
const fs = require('fs');
const recursive = require("recursive-readdir");
const version = 1.0;
const zlib = require('zlib');
const readline = require('readline');
const stream = require('stream');
const beautify = require('js-beautify').js;
const rimraf = require('rimraf');

class FileManager {



    //повертаємось назад по патчі на кількість роздільників
    static backFolder(path, num) {
        let nPath = path;
        for (let t = 0; t < num; t++) {
            nPath = nPath.substring(0, nPath.lastIndexOf(_path.sep));
        }
        return nPath;
    }

    static getSimplePath(pathTo, pathParent) {
        try {
            if (!pathTo) rj(new Error("path to is invalid"));
            if (pathParent && pathParent.startsWith(".")) rj(new Error("path parent is invalid"));
            pathTo = _path.normalize(pathTo);
            if (pathParent) pathParent = _path.normalize(pathParent);

            if (pathParent) {
                if (pathTo.startsWith('.')) {
                    const arr = pathTo.split(_path.sep);
                    let _p = pathParent;
                    let a = -1;
                    arr.forEach((v, v1) => {
                        if (v === '..') {
                            _p = this.backFolder(_p, 1);
                        } else {
                            if (v !== "." && v !== "")
                                a = (a > -1) ? a : v1;
                            return;
                        }
                    })
                    if (_p) {
                        let r = _p;
                        if (a > -1) {
                            for (let q = a; q < arr.length; q++) {
                                r += _path.sep + arr[q];
                            }
                        }
                        return r;
                    }
                    return {error: `error path from -> parent ${pathParent} pathTo -> ${pathTo}`};
                } else {
                    return pathParent + _path.sep + pathTo;
                }
            } else {
                if (pathTo.startsWith('.')) return {error: "ERROR: invalid parent path or path to target"};
                return pathTo;
            }
        } catch (e) {
            console.log(e)

        }
        return {error: "undefined"};
    }

    /**
     * by t62 05.11.2018
     * check the existence of a folder
     * @param pathParent - parent folder (path server.js or other)
     * @param path - check path
     * @param isCreateFolder -
     * returm - is create folder.
     */
    static async checkPathToFolder(pathTo, pathParent = null, isCreateFolder = false) {
        return await new Promise((rs, rj) => {
            try {
                if (!pathTo) rj(new Error("path to is invalid"));
                if (pathParent && pathParent.startsWith(".")) rj(new Error("path parent is invalid"));
                pathTo = _path.normalize(pathTo);
                if (pathParent) pathParent = _path.normalize(pathParent);

                const checkNormPathTo = (path) => {
                    const a = path.split(_path.sep);
                    let cP = path;
                    let numNotFolder = 0;
                    let t = 0;
                    if (!fs.existsSync(cP)) {
                        numNotFolder++;
                        for (t = a.length - 1; t > 0; t--) {
                            cP = this.backFolder(cP, 1);
                            if (fs.existsSync(cP))
                                break;
                            else numNotFolder++;
                        }
                    }
                    if (numNotFolder > 0) {
                        for (let e = t; e < a.length; e++) {
                            if (!cP.endsWith(_path.sep)) cP += _path.sep;
                            if (a[e]) {
                                cP += a[e];
                                if (!fs.existsSync(cP)) {
                                    if (isCreateFolder) fs.mkdirSync(cP);
                                    else return null;
                                }

                            }
                        }
                    }
                    return path;
                }

                if (pathParent) {
                    if (pathTo.startsWith('.')) {
                        const arr = pathTo.split(_path.sep);
                        let _p = pathParent;
                        let a = -1;
                        arr.forEach((v, v1) => {
                            if (v === '..') {
                                _p = this.backFolder(_p, 1);
                            } else {
                                if (v !== "." && v !== "")
                                    a = (a > -1) ? a : v1;
                                return;
                            }
                        })
                        if (_p) {
                            let r = _p;
                            if (a > -1) {
                                for (let q = a; q < arr.length; q++) {
                                    r += _path.sep + arr[q];
                                }
                            }
                            return rs(checkNormPathTo(r));
                        }
                        return rj(`error create new Folder from -> parent ${pathParent} pathTo -> ${pathTo}`);
                    } else {
                        rs(checkNormPathTo(pathParent + _path.sep + pathTo));
                    }
                } else {
                    if (pathTo.startsWith('.')) rj(new Error('invalid parent path or path to target'));
                    rs(checkNormPathTo(pathTo));
                }
            } catch (e) {
                console.log(e)
                rj(e)
            }
        })
    }

    static async getAllFileInFolderRecursive(path) {
        return await new Promise((res, rej) => {
            if (!fs.existsSync(path)) {
                rej(`file "${path}" is not found`);
            } else {
                recursive(path, (err, files) => {
                    if (err) rej(err);
                    else res(files)
                });
            }

        })
    }

    static async getFileInFolder(path) {
        if (!fs.existsSync(path))
            return false;
        path = _path.normalize(path);

        return new Promise((res, rej) => {
            fs.readdir(path, async (err, item) => {
                if (err) rej(err);
                else {
                    const listFile = [];
                    for (let y = 0; y < item.length; y++) {
                        const obj = {
                            path: path + _path.sep + item[y],
                            info: await this.getInfoFile(path + _path.sep + item[y])
                        }
                        listFile.push(obj);
                    }
                    res(listFile);
                }
            })
        })
    }

//https://nodejs.org/api/fs.html#fs_class_fs_stats
    static getInfoFile(path) {
        return new Promise((res, rej) => {
            fs.stat(path, (err, stats) => {
                if (!err) {
                    // noinspection JSAnnotator
                    const obj = {
                        size: stats["size"],
                        mode: stats["mode"],
                        othersExecute: (stats["mode"] & 1) ? 'x' : '-',
                        othersWrite: (stats["mode"] & 2) ? 'w' : '-',
                        othersRead: (stats["mode"] & 4) ? 'r' : '-',
                        groupExecute: (stats["mode"] & 10) ? 'x' : '-',
                        groupWrite: (stats["mode"] & 20) ? 'w' : '-',
                        groupRead: (stats["mode"] & 40) ? 'r' : '-',
                        ownerExecute: (stats["mode"] & 100) ? 'x' : '-',
                        ownerWrite: (stats["mode"] & 200) ? 'w' : '-',
                        ownerRead: (stats["mode"] & 400) ? 'r' : '-',
                        isFile: stats.isFile(),
                        isDirectory: stats.isDirectory(),
                        isBlockDevice: stats.isBlockDevice()
                    }
                    res(obj);
                } else {
                    rej(err);
                }
            });
        })


        /*console.log('    size: ' + stats["size"]);
        console.log('    mode: ' + stats["mode"]);
        console.log('    others eXecute: ' + (stats["mode"] & 1 ? 'x' : '-'));
        console.log('    others Write:   ' + (stats["mode"] & 2 ? 'w' : '-'));
        console.log('    others Read:    ' + (stats["mode"] & 4 ? 'r' : '-'));

        console.log('    group eXecute:  ' + (stats["mode"] & 10 ? 'x' : '-'));
        console.log('    group Write:    ' + (stats["mode"] & 20 ? 'w' : '-'));
        console.log('    group Read:     ' + (stats["mode"] & 40 ? 'r' : '-'));

        console.log('    owner eXecute:  ' + (stats["mode"] & 100 ? 'x' : '-'));
        console.log('    owner Write:    ' + (stats["mode"] & 200 ? 'w' : '-'));
        console.log('    owner Read:     ' + (stats["mode"] & 400 ? 'r' : '-'));


      //  console.log('    file:           ' + (stats["mode"] & 0100000 ? 'f' : '-'));
        //console.log('    directory:      ' + (stats["mode"] & 0040000 ? 'd' : '-'));*/
    }

    static appendEmptyFile(path, text = "") {
        return new Promise((res, rej) => {
            fs.appendFile(path, text, (err) => {
                if (!err) {
                    res();
                } else rej();
            })
        })
    }

    static readFile(path) {
        return new Promise((res, rej) => {
            fs.readFile(path, (err, data) => {
                if (err) rej(err)
                else res(data);
            })
        });
    }

    static rewriteFile(path, text) {
        return new Promise((res, rej) => {
            path = _path.normalize(path);
            const fd = fs.openSync(path, 'r+');
            fs.ftruncate(fd, 0, (err) => {
                if (err) rej(err)
                else {
                    fs.writeFile(path, text, (err) => {
                        if (err)
                            rej(("Error writing file: " + err))
                        else
                            res(true);
                    });
                }
            });
        })
    }

    static async writeToNewFile(path, text) {
        return await new Promise((res, rej) => {
            fs.appendFile(path, text, (err) => {
                if (err) rej(err);
                else res()
            })
        })
    }

    static toGzip(val) {
        return new Promise((res, rej) => {
            zlib.deflate(val, (err, data) => {
                res(data.toString());
            });
        })
    }

    /*static fromGzip(val) {
        return new Promise((res, rej) => {
            const buf = Buffer.from(val, 'utf8');
            zlib.inflate(buf, (err, data) => {
                res(data);
            });
        })
    }*/

    static isExist(path) {
        return fs.existsSync(path);
    }

    static isDir(path) {
        try {
            const stat = fs.lstatSync(path);
            return stat.isDirectory();
        } catch (e) {
            // lstatSync throws an error if path doesn't exist
            return false;
        }
    }

    static createFolder(path) {
        if (!this.isExist(path)) {
            fs.mkdirSync(path);
        }
    }

    /*
        callback(error, line, close)
     */
    static async readLineText(path, callback) {
        if (!this.isExist(path)) callback("path is invalid!!!", null, null);
        await this.getInfoFile(path).then(v => {
            if (v.isFile) {
                const instream = fs.createReadStream(path)
                const outstream = new stream();
                const rl = readline.createInterface(instream, outstream);

                rl.on('line', (line) => {
                    callback(null, line, null);
                });
                rl.on('error', (e) => {
                    callback(e, null, null);
                });
                rl.on('close', (line) => {
                    instream.close();
                    rl.close();
                    callback(null, null, true);
                });
            } else {
                callback("file is directory!!!", null, null);
            }
        })

    }

    static normalizePath(path) {
        path = path.replaceAll("\\?", "")
        path = path.replaceAll(":", "")
        path = path.replaceAll("\\\\", "");

        path = _path.normalize(path);
        return path;
    }

    static setBeautifyJsonString(json) {
        return beautify(json);
    }

    static getRimraf(){
        return rimraf;
    }

}

FileManager._path = _path;

module.exports = FileManager;
