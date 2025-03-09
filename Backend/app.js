const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDb = require("./db/db");
const userRoutes = require("./routes/user.routes");

connectDb();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello i am server");
});

app.use("/users", userRoutes);

module.exports = app;
