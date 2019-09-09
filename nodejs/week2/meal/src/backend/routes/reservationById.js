const express = require('express');
const router = express.Router();
const fs = require('fs');

const rawDataReservation = fs.readFileSync(__dirname + '/../data/meal.json', 'utf8');
const reservations = JSON.parse(rawDataReservation);

router.get('/reservations/:id', (req, res)=>{
    const number
})