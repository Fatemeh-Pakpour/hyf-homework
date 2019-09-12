const express = require("express");
const router = express.Router();

const reviews = require("../data/review.json");

router.get("/", (req, res) => {
  res.send(reviews);
});

module.exports = router;
