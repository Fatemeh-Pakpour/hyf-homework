const express = require ('express');
const app = express ();

const meals = require ('./router/meals.js');
const cheapMeals = require ('./router/cheapMeals.js');
const randomMeal = require ('./router/randomMeal.js');
const largeMeals = require('./router/largeMeals');
const reservations = require('./router/reservations');
const randomReservation = require('./router/randomReservation');


app.use ('/meals', meals);
app.use('/cheap-meals' , cheapMeals);
app.use('/meal' , randomMeal);
app.use('/large-meals' , largeMeals);
app.use('/reservations' , reservations);
app.use('/reservation' , randomReservation);

app.listen(3000);
