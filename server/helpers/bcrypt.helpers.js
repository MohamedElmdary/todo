"use strict";
const bcrypt = require("bcrypt");

module.exports.hashPasswords = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};