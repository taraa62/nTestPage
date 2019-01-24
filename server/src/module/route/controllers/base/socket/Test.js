const SController = require('../../SController');

class Test extends SController {

    test(socket, json) {
        console.log(json);
    }

}

module.exports = Test;