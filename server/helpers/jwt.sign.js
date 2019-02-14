"use strict";
const { jwtVerfiyToken } = require("./jwt.helpers");
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v1");

const signUserToken = async ({ user }, res, next) => {
    try {
        jwtVerfiyToken(user.token);
        next();
    } catch (_) {
        const payload = {
            _id: user._id,
            data: uuid()
        };
        const token = jwt.sign(payload, process.env.jwt, {
            expiresIn: "4h"
        });
        user.token = token
        await user.save();
        next();
    }
}

module.exports = {
    signUserToken
};