const mongoose = require("mongoose");
const User = mongoose.model("User");
const { hashPasswords } = require("../../helpers/bcrypt.helpers");

async function register(req, res, next) {
    try {
        const password = await hashPasswords(req.body.password);
        const user = await new User({
            fullName: {
                firstName: req.body.firstName.trim(),
                lastName: req.body.lastName.trim()
            },
            email: req.body.email,
            gender: req.body.gender,
            password
        }).save();
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

async function findByEmail(email) {
    return await User.findOne({ email });
}

async function findById(id) {
    return await User.findById(id);
}

async function login(req, res, next) {
    try {
        const user = await findByEmail(req.body.email);
        if (user && await user.validatePassword(req.body.password, user.password)) {
            req.user = user;
            return next();
        }
        const error = new Error();
        error.mine = true;
        error.code = 400;
        error.message = [
            "Invalid login credential"
        ];
        throw error;
    } catch (err) {
        next(err);
    }
}

module.exports = {
    findByEmail,
    findById,
    register,
    login
}