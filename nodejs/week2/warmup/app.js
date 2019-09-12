const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/numbers/add", (req, res) => {
  const { first } = req.query;
  const { second } = req.query;

  const add = Number(first) + Number(second);
  res.send(`${first} + ${second} = ${add}`);
});

app.get("/numbers/multiply", (req, res) => {
  const { first } = req.query;
  const { second } = req.query;
  const multiply = first * second;
  res.send(`${first} *${second} =${multiply}`);
});
app.listen(3000, () => {
  console.log("server is running at localhost:3000");
});
