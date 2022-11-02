// ES5 vs ES6 import
//import * as dotenv from "dotenv"

const express = require("express")
const { default: mongoose } = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const PORT = 8080
const dogsRoutes = require("./routes/dogs.routes")
const catsRoutes = require("./routes/cats.routes")
const todoRoutes = require("./routes/todo.routes")
const authRoutes = require("./routes/auth.routes")

//require("dotenv").config()
const dotenv = require("dotenv")
dotenv.config({ path: ".env" })

const corsOptions = {
  //origin: "http://localhost:3000",
  origin: true,
}

app.use(morgan("dev"))
app.use(express.json()) // body-parser asemel

/* app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
}) */

app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster.2s8ziii.mongodb.net/?retryWrites=true&w=majority`

//mongodb+srv://knyrr:<password>@cluster.2s8ziii.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e))

app.use("/cats", catsRoutes)
app.use("/dogs", dogsRoutes)
app.use("/todos", todoRoutes)
app.use("/user", authRoutes)

// CRUD
app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/flights/:from-:to", (req, res) => {
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body,
  })
})

app.get("*", (req, res) => {
  res.send("404")
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
