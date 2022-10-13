const User = require("../models/user.model")

exports.signup = async (req, res) => {
  User.signup(req.body)
    .then((data) => res.send(`Signup done ${data}`))
    .catch((err) => res.send(`Sign up failed  ${err}`))
}

exports.login = async (req, res) => {
  User.login(req.body)
    .then((data) => res.send(`Login done ${data}`))
    .catch((err) => res.send(`Login failed ${err}`))
}

exports.protected = async (req, res) => {
  //res.status(200).send("Welcome 🙌 ")
  res.status(200).send(req.user)
}
