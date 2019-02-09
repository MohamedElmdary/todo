const router = require("express").Router();
const { userErrorMiddleware, validate } = require("./User.errors");

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
        console.log("User: ", user);
    } catch (err) {
        next(err);
    }
});

router.use(userErrorMiddleware);

module.exports = router;