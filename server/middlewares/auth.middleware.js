const { jwtVerfiyToken } = require("../helpers/jwt.helpers");
const { findById } = require("../database/helpers/user.helpers");

module.exports.isAuth = async (req, res, next) => {
    try {
        const token = req.header['Authorization'].split("bearer ")[1];
        const id = jwtVerfiyToken(token)._id;
        const user = await findById(id);
        req.user = user;
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