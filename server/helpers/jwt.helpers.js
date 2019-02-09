const jwt = require("jsonwebtoken");

module.exports.jwtVerfiyToken = token => {  
    jwt.verify(token, process.env.jwt);
};


