const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse meals file
const dataMeal = fs.readFileSync(__dirname + "/../data/meals.json", "utf8");
const meals = JSON.parse(dataMeal);


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const randNum = getRandomNumber(1,10);
const randomMeal = meals.filter(meal => meal.id === randNum);

// get the list of random meal from bd
router.get("/", function(req, res) {
  res.send(randomMeal);
});

module.exports = router;