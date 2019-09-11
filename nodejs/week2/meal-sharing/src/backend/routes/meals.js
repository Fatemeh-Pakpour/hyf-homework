const express = require("express");
const router = express.Router();

const meals = require('../data/meals.json');
let responseMeals =meals;


 router.get ('/', (req, res)=>{
   const parameters = {
     maxPrice : req.query.maxPrice,
     title : req.query.title,
     date : req.query.date,
     limit : req.query.limit
   }

   if(parameters.maxPrice){
    responseMeals = meals.filter(meal => meal.price < parameters.maxPrice);
   }
   if(parameters.title){
    responseMeals = meals.filter(meal =>meal.title === parameters.title);
   }
   if(parameters.date){
   responseMeals = meals.filter(meal => {         
     return Date.parse(meal.createdAt) > Date.parse(parameters.date) ;
   });
  } 
  if (parameters.limit){
    responseMeals = meals.slice(0, parameters.limit);
  }
  res.send (responseMeals);
});

module.exports = router;