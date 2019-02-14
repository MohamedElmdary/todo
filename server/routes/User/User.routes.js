"use strict";
const router = require("express").Router();
const { userErrorMiddleware, validate } = require("./User.errors");
const { sendEmail } = require("../../helpers/node.mailer");

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

router.post("/login", validate('login'), async (req, res, next) => {
    try {
        const user = req.user;
        const userData = {
            token: user.token,
            email: user.email,
            gender: user.gender,
            fullName: user.fullName,
        };
        return res.json(userData);
    } catch (err) {
        next(err);
    }
});

router.post("/changepass", validate('changepass'), async (req, res, next) => {
    try {
        const { user, hash } = req.payload;
        await sendEmail(user.email, 'Change Password', hash);
        res.json({
            msg: [
                `Successfully sent message to ${user.email}`,
                `Change password code will be available for next 3h`
            ]
        });
    } catch (err) {
        next(err);
    }
});


router.patch("/changepass", async (req, res, next) => {
    try {
        /* 
            steps
            1- check email
            2- get user and valid code
            3- change password if correct user and code
            4- return 400 with msg if not correct
        */
    } catch (err) {
        next(err);
    }
});


router.use(userErrorMiddleware);

module.exports = router;