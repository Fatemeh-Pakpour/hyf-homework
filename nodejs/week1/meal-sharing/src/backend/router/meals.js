const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse meals.js
const dataMeal = fs.readFileSync(__dirname + "/../data/meals.json", "utf8");
const meals = JSON.parse(dataMeal);
// console.log(meals);

// get the list of meals from bd
router.get("/", function(req, res) {
  res.send(meals);
});

module.exports = router;
