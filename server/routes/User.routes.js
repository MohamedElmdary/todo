const router = require("express").Router();

// users register
router.post("/register", (req, res, next) => {
    const err = new Error("Router not found");
    err.status(404);
    return next(err);
});

router.use((err, req, res, next) => {
    console.log(err.message);
    res.json({
        done: true
    });
});

module.exports = router;