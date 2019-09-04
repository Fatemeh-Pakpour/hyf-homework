const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse meals.js
const dataReservations = fs.readFileSync(__dirname + "/../data/reservations.json", "utf8");
const reservations = JSON.parse(dataReservations);
// console.log(meals);

// get the list of meals from bd
router.get("/", function(req, res) {
  res.send(reservations);
});

module.exports = router;
