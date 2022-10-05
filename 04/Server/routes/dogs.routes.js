// CRUD - create, read, update, delete

const express = require("express")
const router = express.Router()
const dogsController = require("../controllers/dogs.controller")

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

router.get("/", getMiddleware, dogsController.read)
router.post("/:name", dogsController.create)
router.put("/:name", dogsController.update)
router.delete("/:name", dogsController.delete)

module.exports = router
