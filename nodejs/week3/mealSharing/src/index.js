const express = require('express');
const app = express();
const router = express.Router();

// Routers
const mealsRouter = require('./api/meals');
const reservationsRouter = require('./api/reservations.js');
const reviewsRouter = require('./api/reviews.js');


const port = process.env.PORT || 5000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// If path= meals, use mealsRouter
router.use('/meals', mealsRouter);
 router.use('/reservations', reservationsRouter);
router.use('/reviews', reviewsRouter);


// path 'api' uses express router
app.use('/api', router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));