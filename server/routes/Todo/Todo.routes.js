const router = require("express").Router();
const { todoErrorMiddleware, validate } = require("./Todo.error");

router.post("/create", validate('create'), (req, res) => {
    res.json({
        msg: ['Successfully added  todo.']
    });
});

router.use(todoErrorMiddleware);
module.exports = router;