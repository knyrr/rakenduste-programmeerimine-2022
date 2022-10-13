const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  title: String,
  date: Date,
  importance: Number,
  completed: Boolean,
})

const TodoItem = mongoose.model("ToDo", todoSchema)

exports.create = async (req, res) => {
  const { title, date, importance, completed } = req.body

  const todoItem = await TodoItem.create(
    { title, date, importance, completed },
    function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    }
  )
}

exports.read = async (req, res) => {
  const todoItems = await TodoItem.find({})
  res.send(todoItems)
}

exports.update = async (req, res) => {
  const { title, date, importance, completed } = req.body
  const { name } = req.params
  const filter = { _id: name }
  const update = { title: title + "_muudetud", date, importance, completed }

  //res.send(name)
  //Raimo põhjal
  /*   const todoItem = await Doggie.findOneAndReplace(filter, update, {
    returnDocument: "after",
  })

  res.send(todoItem) */

  //Callback funktsiooniga
  TodoItem.findOneAndReplace(
    filter,
    update,
    {
      returnDocument: "after",
    },
    function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    }
  )
}

exports.delete = async (req, res) => {
  const { name } = req.params
  const filter = { _id: name }
  const todoItem = await TodoItem.deleteMany(filter)
  res.send(todoItem)
}
