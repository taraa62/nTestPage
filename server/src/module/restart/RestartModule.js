const BModule = require("./../BModule")
const fs = require("fs");
const timer = require("./../../utils/TimerUtils")
const FileManager = require("./../../utils/FileManager");


class RestartModule extends BModule {

    endInit() {
        this.isReset = false;
        this._watchChangeFolder();
        this._watchChangeFile();
    }

    async _watchChangeFile() {
        if (this.subConfig.watchEditFile) {
            try {
                const path = await FileManager.checkPathToFolder(this.subConfig.watchEditFile, this.server.getPathProject(), false)
                if (path) {
                    const donorModule = this.getModule("donor_settings");
                    if (donorModule) {
                        if (!donorModule.config.restartServer) {
                            const text = await FileManager.readFile(path);
                            if (text) {
                                const t1 = text.toString()
                                const arr = t1.split(",")
                                for (let y = 0; y < arr.length; y++) {
                                    if (arr[y].indexOf("restartServer")) {
                                        arr[y] = arr[y].replaceAll("true", "false");
                                        break;
                                    }
                                }
                                const repl = arr.join();
                                if (repl.length > 50) { //check is text for rewrite >5 symbols
                                   // console.log("text rewrite:=>  " , repl)
                                    await FileManager.rewriteFile(path, repl);
                                }
                            }
                        }
                    }
                    fs.watch(path, (eventType, filename) => {
                        if (!this.isReset) {
                            this.isReset = true;
                            const t = this.subConfig.delayRestartServer || 0;
                            timer.setTimeout(() => {
                                this.logger.info("general.js is change!, server destroy")
                                this.server.destroy();
                            }, t)
                        }
                    })
                }
            } catch (e) {
                this.logger.error(e.message || e);
            }
        }
    }


    async _watchChangeFolder() {
        if (this.subConfig.watchEditFolder) {

            try {
                const path = await FileManager.checkPathToFolder(this.subConfig.watchEditFolder, this.server.getPathProject(), false)
                if (path) {
                    fs.watch(path, {encoding: 'buffer'}, (eventType, filename) => {
                        if (!this.isReset) {
                            this.isReset = true;
                            const t = this.subConfig.delayRestartServer || 0;
                            timer.setTimeout(() => {
                                console.log(filename.toString());
                                this.server.destroy();
                            }, t)
                        }
                    })
                }
            } catch (e) {
                this.logger.error(e.message);

            }
        }
    }

}

module.exports = RestartModule;