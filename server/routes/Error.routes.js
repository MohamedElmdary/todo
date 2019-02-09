const router = require("express").Router();

router.use((req, res, next) => {
    const err = new Error();
    err.message = {
        errors: [
            "Page not found"
        ]
    };
    err.status = 404;
    next(err);
});

router.use((err, req, res, next) => {
    console.log("Error", JSON.stringify(err, undefined, 2));
    res
        .status(err.status)
        .json(err.message);
});

module.exports = router;