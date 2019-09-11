const express = require("express");
const router = express.Router();

const meals = require('../data/meals.json');

router.get ('/:id', (req, res) => {
    const id = req.params.id;
    // or add the plus operation before the variable to convert it to number
    const numId = Number(id);
    
    let responseMeals;
    // Filter by meal matches with the id 
    const filterById = meals.filter(meal => meal.id === numId);
    if (filterById.length < 1 ) {
      // If no match (empty object)
      responseMeals = 'Meal id does not exist';
    } else {
      // If there is a match
      responseMeals = filterById;
    }
    res.send(responseMeals);
  })

module.exports =router;