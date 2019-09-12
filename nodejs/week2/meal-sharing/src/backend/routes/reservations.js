const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", (req, res) => {
  res.send(responseReservations);
});

module.exports = router;
