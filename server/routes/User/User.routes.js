const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const { userErrorMiddleware, validate } = require("./User.errors");

// users register
router.post("/register", validate('register'), async (req, res, next) => {
    const error = new Error();
    error.mine = true;
    try {
        console.log("here");  
    } catch (err) {
        next(err);
    }
});

router.use(userErrorMiddleware);

module.exports = router;