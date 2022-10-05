//CRUD create read update delete

const express = require("express")
const router = express.Router()

//middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now())
  next()
})
// // define the home page route
// router.get("/", (req, res) => {
//   res.send("Birds home page")
// })
// // define the about route
// router.get("/about", (req, res) => {
//   res.send("About birds")
// })

router.get("/", (req, res) => {
  res.send("Hello World!")
})

router.get("/flights/:from-:to", (req, res) => {
  console.log(req.body)
  res.send({
    params: req.params,
    body: req.body,
  })
})

router.post("/", (req, res) => {
  res.send("Hello Post_World!")
})

module.exports = router
