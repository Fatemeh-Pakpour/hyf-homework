const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse reservations file
const dataReservations = fs.readFileSync(__dirname + "/../data/meals.json", "utf8");
const reservations = JSON.parse(dataReservations);


const randomReservation = reservations[Math.floor(Math.random()*reservations.length)];

// get the list of ransom reservation from bd
router.get("/", function(req, res) {
  res.send(randomReservation);
});

module.exports = router;