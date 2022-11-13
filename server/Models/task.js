const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  user_id:{
    type:String,
    required:true,
    ref:'users',
  }
});

module.exports = mongoose.model("tasks", taskSchema);
