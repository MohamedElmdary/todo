const jwt = require("jsonwebtoken");

module.exports.jwtVerfiyToken = token => {
    return jwt.verify(token, process.env.jwt);
};


