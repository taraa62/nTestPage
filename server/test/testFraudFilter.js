const FileManager = require("./../src/utils/FileManager");
const {assert, expect} = require("chai");


const tess = () => {
    return new Promise(res => setTimeout(() => res("111107"), 1000));
}

const tt = async () => {

    return await tess().then(v => {
        return "22" + v
    });

}


describe("test", () => {


    it("test", async () => {
            var ts = await tt();
            console.log(ts);

        }
    )


})


