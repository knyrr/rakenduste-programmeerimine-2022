const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { body, validationResult } = require("express-validator")

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["pending", "active"], default: "pending" },
    token: { type: String },
  },
  { timestamps: true }
)

// Signup
userSchema.statics.signup = async ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ email })
    if (user) reject("User already exists")

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    })

    const token = jwt.sign(
      // { user_id: user._id, email },
      { email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    )

    newUser.token = token

    newUser.save((err) => {
      if (err) return reject(err)
      resolve(newUser)
    })
  })
}

// Login
userSchema.statics.login = async ({ email, password }) => {
  return new Promise(async (resolve, reject) => {
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.findOne({ email })
    if (user) {
      const hashPassword = user.password
      const match = await bcrypt.compare(password, hashPassword)
      if (match) {
        //resolve(user)
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        )

        user.token = token

        user.save((err) => {
          if (err) return reject(err)
          resolve(user)
        })
        //resolve(user)
      } else {
        reject("Check the password")
      }
    } else {
      reject("Check the username")
    }
  })
}

//ProtecterRoute

const User = model("User", userSchema)

module.exports = User
