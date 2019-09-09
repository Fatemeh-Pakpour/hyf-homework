const express = require("express");
const router = express.Router();
const fs = require("fs");

const rawDataMeals = fs.readFileSync(__dirname + "/../data/meals.json", "utf8");
const meals = JSON.parse(rawDataMeals);

router.get ('/meals/:id', (req, res) => {
    const id = req.params.id;
    const idNumber = Number(id);
    
    let response;
    // Filter which meal matches with the id number 
    const mealMatchId = meals.filter(meal =>  idNumber === meal.id);
    if (mealMatchId.length < 1) {
      // If no match (empty object)
      response = 'Meal id does not exist';
    } else {
      // If there is a match
      response = mealMatchId;
    }
    res.send(response);
  })

module.exports =router;