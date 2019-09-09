const express = require("express");
const router = express.Router ();
const fs = require ('fs');

// Read and parse meals.json file
const rawDataMeals = fs.readFileSync (
  __dirname + '/../data/meals.json',
  'utf8'
);
const meals = JSON.parse (rawDataMeals);
// console.log(meals);


router.get ('/', function (req, res) {
  res.json (meals);
});

module.exports = router;