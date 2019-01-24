class LocalizeController {

    constructor() {

        this.local = {
            ru: require("./ru"),
            en: require("./en")
        }
    }

    getField (lang, field) {
        if (this.local[lang]) {
            return this.local[lang][field] || null;
        }
        return null;
    }


}



module.exports = new LocalizeController();