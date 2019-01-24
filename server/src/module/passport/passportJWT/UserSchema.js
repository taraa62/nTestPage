const mongoose = require('mongoose');
const crypto = require('base');

const userSchema = new mongoose.Schema({
    email: String, //мило під яким реєструвались
    password: String, //пароль
    strategy: String, //стратегія авторизації (local/google)
    strategyID: String, //id стратегії, якщо є
    displayName: String, //ім"я юзера, якщо є
    host: String,
    salt: String,
}, {
    timestamps: true
});

userSchema.methods.checkPassword = function (password) {
    if (!password) return false;
    if (!this.password) return false;
    return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha256') == this.password;
};
userSchema.methods.passToCrypto = async function (password, salt) {
    //Hash the password with a salt round of 10, the higher the rounds the more secure, but the slower
    //your application becomes.
    console.log("pass = > " + password.toString())
    return await crypto.pbkdf2Sync(password.toString(), salt, 1, 128, 'sha256');
}


userSchema.pre('save', async function (next) {
    //'this' refers to the current document about to be saved
    const user = this;
    //Hash the password with a salt round of 10, the higher the rounds the more secure, but the slower
    //your application becomes.
    this.salt = await crypto.randomBytes(128).toString('base64');
    this.password = await crypto.pbkdf2Sync(this.password, this.salt, 1, 128, 'sha256');

    next();
});


// const User = mongoose.model('User', userSchema);
// module.exports = User;
module.exports = userSchema;