const express = require("express");
// const app = express();
const router = express.Router();
const pool = require("../database");
const bodyParser = require("body-parser");

// router.use (bodyParser.urlencoded ({extended: false}));
router.use(bodyParser.json());

router.get("/", (request, response) => {
  pool.query("select * from Meal", (error, results, fields) => {
    if (error) {
      console.error("this is the error", error);
    } else {
      response.send(results);
    }
    //  response.send("Hollo");
  });
});

// post a new meal
router.post("/add-meal", (req, res) => {
  const meal = req.body;
  pool.query("insert into Meal set ?;", meal, (err, result, query) => {
    if (err) {
      console.error("this is the error", err);
    } else {
      res.send("Successfully a meal added");
    }
  });
});

// get a meal by id
router.get("/:id", (req, res) => {
  const mealId = req.params.id;
  console.log("beginning query");
  pool.query(
    "select * from Meal where id = ?",
    mealId,
    (err, result, query) => {
      if (err) {
        console.error(err);
      } else {
        console.log("resulting");
        res.send(result);
        console.log(result);
      }
    }
  );
  console.log("ending query");
});

// update meal by id
router.put("/:id", (req, res) => {
  const mealId = req.params.id;
  pool.query(
    "update Meal set title = ?, description = ?, location = ?, when = ?, max_reservations = ?, price = ?, created_date = ? where id = ?;",
    [
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.when,
      req.body.max_reservations,
      req.body.price,
      req.body.created_date,
      mealId
    ],
    (err, result, query) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Meal has been updated.");
      }
    }
  );
});

// delete meals by id
router.delete("/:id", (req, res) => {
  const mealId = req.params.id;
  pool.query(
    "delete from Meal where id = ?;",
    mealId,
    (err, results, query) => {
      if (err) {
        console.error(err);
      } else {
        res.send("Meal deleted");
      }
    }
  );
});

// get meals that has smaller price than maxPrice
router.get("/", (req, res) => {
  const maxPrice = req.query.maxPrice;
  pool.query(
    "select * from Meal where price <= ?",
    maxPrice,
    (err, results, query) => {
      if (err) {
        console.error(err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
