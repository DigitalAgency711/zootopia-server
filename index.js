const http = require("http");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const config = require("./src/config");
const indexRouter = require("./src/routes");

var app = express();
app.use(cors());
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
mongoose
  .connect(config.db)
  .then((res) => console.log("database connected"))
  .catch((err) => console.log(err));

const port = config.port || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
