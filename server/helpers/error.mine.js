const myError = (code = 400, message) => {
    const error = new Error();
    error.mine = true;
    error.code = code;
    error.message = message;
    throw error;
};

module.exports = {
    myError
};