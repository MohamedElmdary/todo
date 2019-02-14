const { body } = require("express-validator/check");
const { expressValidatorHelper } = require("../../helpers/validator.handler");
const { Types } = require("mongoose");

const validate = (method) => {
    switch (method) {
        case 'create': {
            return [
                body('title').isString().withMessage("Invalid todo's title value.")
                    .trim().isLength({ min: 1, max: 75 }).withMessage("First name min length is 1 and max is 75.").escape(),
                body('body').isString().withMessage("Invalid todo's body value.")
                    .trim().isLength({ min: 1, max: 400 }).withMessage("First name min length is 1 and max is 400.").escape(),
                body('user').custom(user => {
                    return Types.ObjectId.isValid(user);
                }).withMessage("Invalid user."),
                expressValidatorHelper
            ];
        }
    }
};

const todoErrorMiddleware = (err, req, res, next) => {

    if (!err.mine) {
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
    todoErrorMiddleware
};