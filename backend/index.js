
// this is the final product locking it
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

const exerciseRouter = require("./routes/exercises");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
