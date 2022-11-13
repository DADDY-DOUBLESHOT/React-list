require('dotenv').config();
const jwt = require("jsonwebtoken");
const Task = require("../Models/task");
const User = require("../Models/user");
const express = require("express");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.post("/get", async (req, res) => {
  try {
    const tasks = await Task.find({"user_id":req.body.user_id});
    console.log('get');
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.post("/update", async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.findByIdAndUpdate(
      { _id: req.body.id },
      req.body
    );
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.post("/remove", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.body.id);
    res.send(task);
    console.log('task removed')
  } catch (error) {
    res.send(error);
  }
});
router.post("/clear", async (req, res) => {
  try {
    console.log('clear list')
    const task=await Task.remove({user_id:req.body.id})
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});
router.post("/data", async (req, res) => {
  try {
    const token=req.headers['authorization'].split(' ')[1];
    const dtoken = jwt.verify(token, process.env.KEY);
    const user = await User.findById(dtoken.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

module.exports=router;
