const FileManager = require("./../src/utils/FileManager");
const {assert, expect} = require("chai");


describe("test", () => {


    it("test", async () => {
            const projectFolder = FileManager.backFolder(__dirname, 1);
            const pathTo = "./";

            await FileManager.checkPathToFolder(pathTo, projectFolder, true).then(v => {
                console.log(v)
            }).catch(
                e => console.error(e)
            )


        }
    )

})


