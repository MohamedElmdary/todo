const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

// users register
router.post("/register", async (req, res, next) => {
    const error = new Error();
    error.mine = true;
    try {
        
    } catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
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
});

module.exports = router;