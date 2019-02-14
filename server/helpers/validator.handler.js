"use strict";
const { validationResult } = require("express-validator/check");

const expressValidatorHelper = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty())
        return next();
    const error = new Error();
    error.mine = true;
    error.code = 400;
    error.message = errors.array().map(err => err.msg);
    throw error;
};

module.exports = {
    expressValidatorHelper
};