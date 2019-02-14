const router = require("express").Router();
const { todoErrorMiddleware, validate } = require("./Todo.error");

router.post("/create", validate('create'), (req, res) => {
    res
        .status(201)
        .json({
            todo: req.todo._id,
            msg: ['Successfully added todo.']
        });
});

router.delete('/:id', validate('delete'), (req, res) => {
    res
        .json({
            msg: ['Successfully removed todo.']
        });
});

router.use(todoErrorMiddleware);

module.exports = router;