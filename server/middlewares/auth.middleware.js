const { jwtVerfiyToken } = require("../helpers/jwt.helpers");

module.exports.authReq = (req, res, next) => {
    try {
        const token = req.header['Authorization'].split("bearer ")[1];
        jwtVerfiyToken(token);
        next();
    } catch (err) {
        const error = new Error();
        error.code = 401;
        error.message = [
            "Unauthorized user.",
            "Please login to continue."
        ];
        throw error;
    }
};