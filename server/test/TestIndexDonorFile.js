// const Server = require("../src/server/Server");
const axios = require("axios");
const {assert, expect} = require("chai");


describe("test on run getcrypto server", () => {



    beforeEach(async () => {
       await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        })

    })

    it("test get index html file donor server", async () => {
        await axios.get('http://www2.latech.edu/book').then(function (response) {
            console.log('success: ', response.message);
        }).catch(function (error) {
            // throw new Error("test for one update currency");
            console.log('error: ', error.message);
        });

    });

})


