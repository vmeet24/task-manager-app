const express = require("express");
const mongoose = require("mongoose");
const app = express();
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");
const logger = require("./middleware/logger");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(userRouter);
app.use(taskRouter);

app.listen(5000, "192.168.0.102", () => {});

mongoose
  .connect("mongodb://localhost:27017/task-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("Connect to DB!");
  })
  .catch((error) => {
    console.error(error + "Connection Failed!");
  });
