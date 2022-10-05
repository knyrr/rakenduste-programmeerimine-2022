const mongoose = require("mongoose")

const doggieSchema = new mongoose.Schema({
  name: String,
})

const Doggie = mongoose.model("Doggie", doggieSchema)

exports.create = async (req, res) => {
  const { name } = req.params

  const doggie = await Doggie.create({ name })

  res.send(doggie)
}

exports.read = async (req, res) => {
  const doggies = await Doggie.find({}, { _id: 0, __v: 0 })
  res.send(doggies)
}

exports.update = async (req, res) => {
  // Täiendada ise, otsida mongoosejs.com dokumentatsioonist (nt findOneAndReplace)
  const { name } = req.params

  const filter = { name: name }
  const update = { name: name + "_muudetud" }

  //Raimo põhjal
  /*   const doggie = await Doggie.findOneAndReplace(filter, update, {
    returnDocument: "after",
  })

  res.send(doggie) */

  //Callback funktsiooniga
  Doggie.findOneAndReplace(
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
  // Täiendada ise, otsida mongoosejs.com dokumentatsioonist

  const { name } = req.params

  const filter = { name }

  const doggie = await Doggie.deleteMany(filter)

  res.send(doggie)
}
