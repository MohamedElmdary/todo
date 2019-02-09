require("./configs/config.env");
const express = require("express");
const app = express();

// mongoose config file
require("./database/mongoose.config");

// some express middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json());



app.listen(process.env.PORT, () => console.log(`Server listen on port ${process.env.PORT}`));