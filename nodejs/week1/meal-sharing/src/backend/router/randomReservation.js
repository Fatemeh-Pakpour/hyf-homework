const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse meals.js
const dataReservations = fs.readFileSync(__dirname + "/../data/meals.json", "utf8");
const reservations = JSON.parse(dataReservations);
// console.log(meals);

const random = reservations[Math.floor(Math.random()*reservations.length)];

// const randomReservation = reservations.filter(reservation => reservation.id === randNum);

// get the list of meals from bd
router.get("/", function(req, res) {
  res.send(random);
});

module.exports = router;