const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  // or add the plus operation before the variable to convert it to number
  // const numId = Number(id);

  let responseReservations = reservations;
  // Filter by meal matches with the id
  const filterById = reservations.filter(meal => meal.mealId === +id);
  if (filterById.length < 1) {
    responseReservations = "Reservation id does not exist";
  } else {
    // If there is a match
    responseReservations = filterById;
  }
  res.send(responseReservations);
});

module.exports = router;
