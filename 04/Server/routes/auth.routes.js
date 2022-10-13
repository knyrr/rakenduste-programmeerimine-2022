// CRUD - create, read, update, delete

const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")
const validate = require("../middleware/validation.middleware")

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now())
  next()
})

// Seda ei kasuta
const getMiddleware = (req, res, next) => {
  console.log("Getting DB result for req.user")
  next()
}

router.post("/signup", [validate], authController.signup)

//router.route("/signup").post(validationMiddleware, authController.signup)
//router.route('/register').post(validate.register, controller.register);

router.post("/login", authController.login)
router.get("/protectedRoute", authMiddleware, authController.protected)

module.exports = router
