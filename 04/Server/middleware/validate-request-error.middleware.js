const { NextFunction, Request, Response } = require("express")
const { validationResult } = require("express-validator")

const validateRequestError = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

module.exports = validateRequestError
