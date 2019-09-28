require('dotenv').config();
const express = require('express');
const app = express();
const localtunnel = require('localtunnel');
const checkRouter = require('./check');
const orderRouter =require('./router');
const kitchenRouter = require('./kitchen');


const PORT = process.env.PORT;


const {SUBDOMAIN}= process.env;
// console.log(SUBDOMAIN);
app.use('/check', checkRouter);
app.use('/incoming-sms', orderRouter);
app.use('/kitchen/order', kitchenRouter);



app.listen(PORT , () => {
    console.log('app is listening')
})

//localtunnel.me
const tunnel= localtunnel(PORT, {subdomain:SUBDOMAIN}, (err, tunnel)  => {
    if (!err)
      console.log('Tunnel is open');
    else
      console.log('Error opening tunnel: ', err);
  });
  
  tunnel.on('close', function() {
    // When the tunnel is closed
    console.log('Tunnel is closed');
  });
  



