const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse meals file
const dataMeal = fs.readFileSync(__dirname + "/../data/meals.json", "utf8");
const meals = JSON.parse(dataMeal);


// get the list of meals from bd
router.get("/", function(req, res) {
  res.send(meals);
});

// Add reviews to the meals 
const dataReview= fs.readFileSync(__dirname + "/../data/review.json", "utf8");
const reviews = JSON.parse(dataReview);

meals.forEach(meal => {
  meal.review = [];
  for(let review of reviews){
    if (meal.id === review.meal_id){
      meal.review.push(review);
    }
  }
});

module.exports = router;
