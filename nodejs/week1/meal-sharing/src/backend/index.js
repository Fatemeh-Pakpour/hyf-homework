const express = require ('express');
const app = express ();

const meals = require ('./router/meals.js');
const cheapMeals = require ('./router/cheapMeals.js');
const randomMeal = require ('./router/randomMeal.js');
const largeMeals = require('./router/largeMeals')

app.use ('/meals', meals);
app.use('/cheap-meals' , cheapMeals);
app.use('/meal' , randomMeal);
app.use('/large-meals' , largeMeals);
app.listen(3000);
