const express = require('express');
const app = express();

const meals = require ('./routes/meals.js');
const mealsId = require('./routes/mealId');

app.use(function(err, req, res, next) {
  //do logging and user-friendly error message display
  res.send(500, 'internal server error');
})

app.use ('/meals', meals);
app.use ('/meals', mealsId);



const server = app.listen (3000, () =>{
    console.log ('The app is running on localhost:3000!');
  });