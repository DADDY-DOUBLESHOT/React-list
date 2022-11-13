const User = require("../Models/user");
const express = require("express");
const sendToken = require("../auth/token");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    console.log('login')
    const user = await User.findOne({"email":req.body.email});
    if (!user || user.password != req.body.password)
      return res.send("Invalid", 401);
    sendToken(user, 201, res);
    console.log('success')
  } catch (error) {
    res.send(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("test");
    const { email, password, name } = req.body;
    const user = await User.create({
      email,
      password,
      name,
    });
    console.log("New user registered");
    const token = user.getToken();
    sendToken(user, 201, res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
