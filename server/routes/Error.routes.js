const router = require("express").Router();

router.use((req, res, next) => {
    const err = new Error();
    err.message = [
        "Page not found"
    ];
    err.code = 404;
    next(err);
});

router.use((err, req, res, next) => {
    if (!err.code || !err.message) {
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