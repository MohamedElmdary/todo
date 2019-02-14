const router = require("express").Router();
const { todoErrorMiddleware, validate } = require("./Todo.error");

router.post("/create", validate('create'), (req, res) => {

});

module.exports = router;