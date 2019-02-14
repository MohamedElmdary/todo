const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");
const { myError } = require("../../helpers/error.mine");


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

async function getTodoById(id) {
    return await Todo.findById(id);
}

async function updateTodo(req, res, next) {
    try {
        const todo = await getTodoById(req.params.id);

        if (!todo)
            myError(["Todo was not found yet"]);

        if (todo.user.toString() !== req.user._id.toString())
            myError(["Todo doesn't belong to the user"]);

        todo.title = req.body.title;
        todo.body = req.body.body;
        await todo.save();
        next();
    } catch (err) {
        next(err);
    }
}

async function deleteTodo(req, res, next) {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo)
            myError(["Todo was not found yet"]);

        if (todo.user.toString() !== req.user._id.toString())
            myError(["Todo doesn't belong to the user"]);

        await todo.remove();
        next();
        myError(["Todo was not found yet"]);
    } catch (err) {
        next(err);
    }
}

async function getUserTodos(req, res, next) {
    try {
        const todos = await Todo.find({ user: req.user._id }).select("-user -updatedAt");
        req.todos = todos;
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo,
    getUserTodos
};