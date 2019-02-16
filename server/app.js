"use strict";
require("./configs/config.env");
const express = require("express");
const app = express();
const validator = require("express-validator");
const cors = require("cors");

// mongoose config file
require("./database/mongoose.config");

// some express middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(validator());
app.use(cors());

// app routes
app.use("/user", require("./routes/User/User.routes"));
app.use("/todo", require("./routes/Todo/Todo.routes"));

// not found router handler
app.use(require("./routes/Error.routes"));

app.listen(process.env.PORT, () => console.log(`Server listen on port ${process.env.PORT}`));
