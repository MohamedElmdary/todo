const mongoose = require("mongoose");
const User = mongoose.model("User");


module.exports.register = async (req, res, next) => {
    try {
        const user = await new User({
            fullName: {
                firstName: req.body.firstName.trim(),
                lastName: req.body.lastName.trim()
            },
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password
        }).save();
        req.user = user;
        next();
    } catch (err) {
        next(err);
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (await user.validatePassword(req.body.password, user.password)) {
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