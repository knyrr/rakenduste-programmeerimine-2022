const { body } = require("express-validator")

const registerSchema = [
  body("email")
    .isEmail()
    .withMessage("email must contain a valid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password must be at least 5 characters long"),
]

module.exports = registerSchema
