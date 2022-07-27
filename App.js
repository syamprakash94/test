const express = require("express");
const app = express();
const { verifylogin, verifysignin } = require("./Middlewere");

app.get("/", verifylogin, (req, res) => {
  res.send("Hello World");
});

app.get("/login", verifysignin, (req, res) => {
  res.send("hello");
});

app.listen(3001, function () {});
