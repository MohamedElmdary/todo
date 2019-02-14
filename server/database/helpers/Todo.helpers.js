const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");


module.exports.createTodo = async (req, res, next) => {
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