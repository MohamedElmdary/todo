const router = require("express").Router();
const { userErrorMiddleware, validate } = require("./User.errors");
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v1");
const { jwtVerfiyToken } = require("../../helpers/jwt.helpers");

// user register
router.post("/register", validate('register'), async (req, res, next) => {
    try {
        const user = req.user;
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

// user login
router.post("/login", validate('login'), async (req, res, next) => {
    try {
        const user = req.user;
        const userData = {
            token: user.token,
            email: user.email,
            gender: user.gender,
            fullName: user.fullName,
        };
        try {
            jwtVerfiyToken(user.token);
        } catch (_) {
            const payload = {
                _id: user._id,
                data: uuid()
            };
            const token = jwt.sign(payload, process.env.jwt, {
                expiresIn: "4h"
            });
            user.token = token
            user.save();
            userData.token = token;
        }
        return res.json(userData);
    } catch (err) {
        next(err);
    }
});

router.use(userErrorMiddleware);

module.exports = router;