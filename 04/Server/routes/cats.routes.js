// CRUD - create, read, update, delete

const express = require("express")
const router = express.Router()
const catsController = require("../controllers/cats.controller")

// middleware that is specific to this router
router.use((req, res, next) => {
  const { name } = req.body

  if (name !== "Raimo") throw new Error("Noup")

  req.user = {
    name: "Raimo",
    role: "Owner",
  }

  console.log("Time: ", Date.now())
  next()
})

const getMiddleware = (req, res, next) => {
  console.log("Getting DB result for req.user")
  next()
}

router.get("/", getMiddleware, catsController.read)
router.post("/:name", catsController.create)
router.put("/:name", catsController.update)
router.delete("/:name", catsController.delete)

module.exports = router
