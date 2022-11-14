require('dotenv')
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar:{
    type:Number,
    required:true,
  }
});

userSchema.methods.getToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.KEY, {
    expiresIn: process.env.EXP,
  });
};


module.exports = mongoose.model("users", userSchema);
