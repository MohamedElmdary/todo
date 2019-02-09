const validate = (method) => {

};

const userErrorMiddleware = (err, req, res, next) => {
    if (err.code === 11000) {
        err.code = 400;
        err.message = [
            "Email already exist"
        ];
    } else if (!err.mine) {
        err.code = 500;
        err.message = [
            "Internal server error"
        ];
    }

    res
        .status(err.code)
        .json({
            errors: err.message
        });
};

module.exports = {
    validate,
    userErrorMiddleware
};