const { body } = require("express-validator/check");
const { expressValidatorHelper } = require("../../helpers/validator.handler");
const { login, register } = require("../../database/helpers/user.helpers");

const validate = (method) => {
    switch (method) {
        case 'register':
            return [
                body('firstName').isString().withMessage("Invalid first name value.")
                    .trim().isLength({min: 2, max: 25}).withMessage("First name min length is 2 and max is 25.").escape(),
                body('lastName').isString().withMessage("Invalid last name value.")
                    .trim().isLength({min: 2, max: 25}).withMessage("Last name min length is 2 and max is 25.").escape(),
                body('email').isEmail().withMessage("Invalid email address."),
                body('password').isString().withMessage("Invalid password value.")
                    .isLength({min: 6}).withMessage("Too short password."),
                body('gender').custom(gender => {
                    return ['f', 'm'].indexOf(gender) > -1
                }).withMessage("Invalid gender."),
                expressValidatorHelper,
                register
            ];

        case 'login':
            return [
                body('email').isEmail().withMessage("Invalid login credential"),
                expressValidatorHelper,
                login
            ]
    }
};

const userErrorMiddleware = (err, req, res, next) => {

    if (err.code === 11000) {
        err.code = 400;
        err.message = [
            "Email already exist"
        ];
    } else if (!err.mine) {
        err.code = 500;
        err.message = [
            "Internal server error"
        ];
    }
    
    res
        .status(err.code)
        .json({
            errors: err.message
        });
};

module.exports = {
    validate,
    userErrorMiddleware
};