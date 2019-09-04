const express = require("express");
const router = express.Router();
const fs = require("fs");

// Read and Parse reservations file
const dataReservations = fs.readFileSync(__dirname + "/../data/reservations.json", "utf8");
const reservations = JSON.parse(dataReservations);


// get the list of reservations from bd
router.get("/", function(req, res) {
  res.send(reservations);
});

module.exports = router;
