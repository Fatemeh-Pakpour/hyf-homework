require('dotenv').config();
const express = require('express');
const checkRouter = express.Router();

checkRouter.get('/', (req,res)=>{
    res.send("Hello Fatemeh");
})

module.exports = checkRouter;