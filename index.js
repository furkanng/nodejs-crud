const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

const middleware = function (req, res, next) {
  console.log("İstek geldi");
  next();
};
app.get("/hello", middleware, (req, res) => {
  console.log("hello get istegi attınız");
  res.json("hello get rest api");
});

app.post("/hello", middleware, (req, res) => {
  console.log("hello post istegi attınız");
  res.json("hello post rest api");
});

app.put("/hello", middleware, (req, res) => {
  console.log("hello put istegi attınız");
  res.json("hello put rest api");
});

app.delete("/hello", middleware, (req, res) => {
  console.log("hello delete istegi attınız");
  res.json("hello delete rest api");
});

app.listen(PORT, () => {
  console.log("listening", PORT);
});
