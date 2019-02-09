require("./configs/config.env");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => console.log("DB connected!"))
    .catch(err => console.log("Error:", err));

app.use(express.urlencoded({extended: false}))
app.use(express.json());



app.listen(process.env.PORT, () => console.log(`Server listen on port ${process.env.PORT}`));