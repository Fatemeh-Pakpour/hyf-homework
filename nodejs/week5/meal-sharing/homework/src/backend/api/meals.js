const express = require ('express');
const router = express.Router ();
const pool = require ('./../database');
const bodyParser = require ('body-parser');

router.use (bodyParser.json ());

router.get ('/', (req, res) => {
  // const availableReservations = req.query.availableReservations;
  const maxPrice = Number (req.query.maxPrice);

  const rawTitle = req.query.title;
  const title = rawTitle && `%${rawTitle}%`;

  const rawDate = req.query.createdAfter;
  const date = rawDate && new Date (rawDate + 'Z');

  const rawLimit = req.query.limit;
  const limit = rawLimit && Number (rawLimit);

  // Build query according to queries from url
  function getQuery () {
    // If conditions exist, push them into the conditions array
    const conditions = [];
    let query = `select * from meal `;
    if (maxPrice) {
      const maxPriceQuery = ` price < ${maxPrice}`;
      console.log (maxPriceQuery);
      conditions.push (maxPriceQuery);
    }
    if (title) {
      const titleQuery = ` title like '${title}'`;
      conditions.push (titleQuery);
    }
    if (date) {
      const dateQuery = `created_date > ${date}`;
      conditions.push (dateQuery);
    }

    // Modify queries according to array length
    if (conditions.length === 1) {
      query += ' where' + conditions[0];
    }
    if (conditions.length > 1) {
      query += 'where' + conditions.join (' and ');
    }

    if (limit) {
      const limitQuery = ` limit ${limit}`;
      query += limitQuery;
    }

    return `${query};`;
  }

  pool.query (getQuery (), '', (err, results, fields) => {
    if (err) {
      console.error (err);
    } else {
      res.send (results);
    }
  });
});

// Post new meal
router.post ('/add-meal', (req, res) => {
  const meal = req.body;
  console.log(meal);
  pool.query ('insert into meal set ?;', meal, (err, result, query) => {
    if (err) {
      console.error ('this is the error', err);
    } else {
      res.send ('Meal added');
    }
  });
});

// Get meal by id
router.get ('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query (
    'select * from meal where id = ?;',
    mealId,
    (err, result, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send (result);
      }
    }
  );
});

// Update meal by id
router.put ('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query (
    'update meal set title = ?, description = ?, location = ?, when = ?, max_reservations = ?, price = ?, created_date = ? where id = ?;',
    [
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.when,
      req.body.max_reservations,
      req.body.price,
      req.body.created_date,
      mealId,
    ],
    (err, result, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send ('Meal has been updated.');
      }
    }
  );
});

// Delete meals by id
router.delete ('/:id', (req, res) => {
  const mealId = req.params.id;
  pool.query (
    'delete from meal where id = ?;',
    mealId,
    (err, results, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send ('Meal has been deleted.');
      }
    }
  );
});

// Get meals that has smaller price than maxPrice
router.get ('/', (req, res) => {
  const maxPrice = req.query.maxPrice;
  pool.query (
    'select * from meal where price <= ?',
    maxPrice,
    (err, results, query) => {
      if (err) {
        console.error (err);
      } else {
        res.send (results);
      }
    }
  );
});

module.exports = router;

  // const returnAvailableReserv = (availableReservations) => {
  //   if (availableReservations === true) {
  //     const availableReservQuery = `inner join reservation on meal.id = reservation.meal_id where meal.max_reservations > reservation.number_of_guests;`
  //     return availableReservQuery;
  //   }
  // };