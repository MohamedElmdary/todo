"use strict";
const myError = (message, code = 400) => {
    const error = new Error();
    error.mine = true;
    error.code = code;
    error.message = message;
    throw error;
};

module.exports = {
    myError
};