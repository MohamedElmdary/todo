const { body } = require("express-validator/check");
const { expressValidatorHelper } = require("../../helpers/validator.handler");
const { createTodo } = require("../../database/helpers/Todo.helpers");
const { isAuth } = require("../../middlewares/auth.middleware");

const validate = (method) => {
    switch (method) {
        case 'create': {
            return [
                isAuth,
                body('title').isString().withMessage("Invalid todo's title value.")
                    .trim().isLength({ min: 1, max: 75 }).withMessage("First name min length is 1 and max is 75.").escape(),
                body('body').isString().withMessage("Invalid todo's body value.")
                    .trim().isLength({ min: 1, max: 400 }).withMessage("First name min length is 1 and max is 400.").escape(),
                expressValidatorHelper,
                createTodo
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