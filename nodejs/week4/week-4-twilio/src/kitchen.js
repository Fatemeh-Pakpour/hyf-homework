
const express = require('express');
const kitchenRouter = express.Router();
const bodyParser = require('body-parser');
const pool = require('./database');

kitchenRouter.use(bodyParser.json());
kitchenRouter.use(bodyParser.urlencoded({ extended: false }));

kitchenRouter.get('/', (req,res)=>{
    pool.query("SELECT * FROM orders2 ORDER BY type", (err, result)=>{
        if (err) throw err;
        res.json(result);
      });
})


kitchenRouter.get('/:id', (req,res)=>{
    const {id} = req.params;
pool.query('SELECT * FROM orders2 WHERE id = ?', id , (err, result, query) => {
    if (err) {
      console.error("this is the error", err);
    } else {
     res.json(result)
    }
    
    })
})

kitchenRouter.patch('/:id', (req, res) => {
    const {id} = req.params;
    const newStatus = req.body.status;
    console.log(newStatus);
    pool.query(`UPDATE orders2 SET status = ? WHERE id = ?`,[newStatus, id],(err, result, query) => {
        if (err) {
          console.error("this is the error", err);
        } else { 
        console.log(`your order id is `)
    res.send(`Status is changed to the ${newStatus} status`);
        }
})
})

module.exports = kitchenRouter;
