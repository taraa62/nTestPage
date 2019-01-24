const FileManager = require("../../utils/FileManager");
const BModdule = require("./../BModule");

class GlobalSaveInfo extends BModdule {


    async endInit() {
        this.db = {};
        this.createNewList("def");

        const path = FileManager.getSimplePath(this.subConfig.pathForOtherLogInfo, this.server.getPathProject());
        if (path && !path.error) {
            if (!FileManager.isExist(path))
                await FileManager.appendEmptyFile(path, "");
        }
    }


    createNewList(name) {
        this.db[name] = [];
    }

    pushToDefListMess(mess) {
        this.pushToListMess("def", mess);
    }

    pushToListMess(nameList, mess, isCreateList = false) {
        if (this.db[nameList]) this.db[nameList].push(mess);
        else if (isCreateList) {
            this.createNewList(nameList);
            this.db[nameList].push(mess);
        } else this.db["def"].push(mess);
    }


    async destroy() {
        let json = JSON.stringify(this.db);
        json = FileManager.setBeautifyJsonString(json);

        const path = FileManager.getSimplePath(this.subConfig.pathForOtherLogInfo, this.server.getPathProject());
        if (path && !path.error) {
            await FileManager.rewriteFile(path, json).then(v =>
                this.logger.info("file with other logs success safe.")
            ).catch(e => {
                    this.logger.error("file for other logs is not safe!!!!")
                }
            )
        }


    }

}

module.exports = GlobalSaveInfo;