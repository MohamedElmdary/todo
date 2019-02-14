const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");


async function createTodo(req, res, next) {
    try {
        const todo = await new Todo({
            title: req.body.title,
            body: req.body.body,
            user: req.user._id
        }).save();
        req.todo = todo;
        next();
    } catch (err) {
        next(err);
    }
};

async function deleteTodo(req, res, next) {
    try {
        await Todo.deleteOne({
            _id: req.params.id
        });
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createTodo,
    deleteTodo
};