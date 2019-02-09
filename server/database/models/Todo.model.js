const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 75,
        alias: 't'
    },
    body: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 400,
        alias: 'b'
    },
    done: {
        type: Boolean,
        default: false,
        alias: 'd'
    },
    createdAt: {
        type: Date,
        default: new Date().toISOString(),
        alias: 'ca'
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
        alias: 'u'
    }
});

Todo.index({
    title: 'text'
});

mongoose.model("Todo", Todo);

