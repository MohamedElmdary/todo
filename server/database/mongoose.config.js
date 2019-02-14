"use strict";
const mongoose = require("mongoose");

mongoose.connect(process.env.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log("DB connected!"))
    .catch(err => console.log("Error:", err));

// add User Schema
require("./models/User.model");

// add Todo Schema
require("./models/Todo.model");
