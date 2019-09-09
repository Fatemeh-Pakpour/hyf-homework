const express = require('express');
const app = express();

const mealsRouter = require ('./routes/meals.js');
const mealsId = require('./routes/mealId');

app.use ('/meals', mealsRouter);
app.use ('/', mealsId);


const server = app.listen (3000, () =>{
    console.log ('The app is running on localhost:3000!');
  });