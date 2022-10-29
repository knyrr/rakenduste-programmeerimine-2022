// CRUD - create, read, update, delete

const express = require("express")
const cors = require("cors")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")
const validateRegistration = require("../validationSchema/register.schema")
const validateRequestError = require("../middleware/validate-request-error.middleware")

const corsOptions = {
  //origin: "http://localhost:3000",
  origin: true,
}

//router.use(cors())

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

router.post(
  "/signup",
  cors(corsOptions),
  validateRegistration,
  validateRequestError,
  authController.signup
)

//router.route("/signup").post(validationMiddleware, authController.signup)
//router.route('/register').post(validate.register, controller.register);

//router.post("/login", cors(corsOptions), authController.login)
router.post("/login", authController.login)
router.get("/protectedRoute", authMiddleware, authController.protected)

module.exports = router
