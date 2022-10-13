const { body, check, validationResult } = require("express-validator")

const validateInput = (req, res, next) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  //const tere = body("email")
  const errors = validationResult(
    body("email").isEmail(),
    body("password").isLength({ min: 5 })
  )

  if (!errors.isEmpty()) {
    //return res.status(400).json({ errors: errors.array() })
    return res.send("miski info")
  }
  //return res.send(req)
  //return req
  //res.send(tere)

  return next()
}

/* exports.validateUser = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("User name can not be empty!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!")
    .bail(),
  check("email")
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() })
    next()
  },
] */

module.exports = validateInput
//module.exports = validateUser
