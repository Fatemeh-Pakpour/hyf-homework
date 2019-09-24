require('dotenv').config();
const express =require('express');
const app = express();
const localtunnel = require('localtunnel');
 const checkRouter= require('./router');
 const bodyParser= require('body-parser');


 const PORT=process.env.PORT;
 console.log(PORT);
const {SUBDOMAIN}= process.env;
app.use('/',checkRouter);

//middleware
checkRouter.use(bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());

 app.listen(PORT , () =>{
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
  
  
