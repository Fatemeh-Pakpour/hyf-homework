const express = require("express");
const router = express.Router();

const reviews = require("../data/review.json");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  // or add the plus operation before the variable to convert it to number
  const numId = Number(id);

  let responseReviews = reviews;
  // Filter by meal matches with the id
  const filterById = reviews.filter(meal => meal.meal_id === numId);
  if (filterById.length < 1) {
    responseReviews = "Review id does not exist";
  } else {
    // If there is a match
    responseReviews = filterById;
  }
  res.send(responseReviews);
});

module.exports = router;
