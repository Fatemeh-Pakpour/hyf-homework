const express = require("express");
const app = express();

app.use((req, res, next) => {
  const date = new Date();
  console.log(`${date} request received for path:${req.url}`);
  next();
});

const meals = require("./routes/meals.js");
const mealsId = require("./routes/mealId");
const reservationsById = require("./routes/reservationById");
const reservations = require("./routes/reservations");
const reviews = require("./routes/reviews");
const reviewsById = require("./routes/reviewById");

app.use("/meals", meals);
app.use("/meals", mealsId);
app.use("/reservations", reservationsById);
app.use("/reservations", reservations);
app.use("/reviews", reviews);
app.use("/reviews", reviewsById);

// app.use((req, res,next)=>{
//   const err = new Error("oh no!")
//   err.status = 404;
//   next(err);
// })

const server = app.listen(3000, () => {
  console.log("The app is running on localhost:3000!");
});
