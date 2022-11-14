const cors = require("cors");
const connection = require("./DB/database");
const tasksAPI = require("./routes/task");
const userAPI = require("./routes/user");
const express = require("express");
const Task = require("./Models/task");
const { VerifyUser } = require("./auth/middleware/verify");
const app = express();

// database connection
connection();
app.use(express.json());
app.use(cors());

// middleware on task routes only
app.use("/task", VerifyUser, tasksAPI);
app.use("/user", userAPI);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server started..."));
