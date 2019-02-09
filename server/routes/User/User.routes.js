const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const { userErrorMiddleware, validate } = require("./User.errors");

// users register
router.post("/register", validate('register'), async ({ body }, res, next) => {
    const error = new Error();
    error.mine = true;
    try {
        const user = await new User({
            fullName: {
                firstName: body.firstName,
                lastName: body.lastName
            },
            email: body.email,
            gender: body.gender,
            password: body.password
        }).save();
        const name = user.fullName.firstName.toLowerCase();
        res
            .status(201)
            .json({
                email: user.email,
                msg: [
                    `Registered successfully ${user.gender === 'm' ? "Mr." : "Ms."} ${name[0].toUpperCase() + name.slice(1)}`,
                    "Please login to continue"
                ]
            })
    } catch (err) {
        next(err);
    }
});

router.use(userErrorMiddleware);

module.exports = router;