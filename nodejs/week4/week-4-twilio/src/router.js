require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser');

console.log(process.env.ACCOUNT_SID);
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Order = require('./order');
const pool = require('./database');

// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

function sendMessage(res, responseMassage){
  const twiml = new MessagingResponse();
  twiml.message(responseMassage);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
}

function createOrder(res,typeFood){
  if(typeFood ==="pizza" || typeFood ==="salad" || typeFood ==="burger"){
    try{
      const newOrder = new Order(typeFood, "ordered", new Date(), new Date())
      pool.query("insert into orders2 set ?", newOrder, (err, result, query) => {
        if (err) {
          console.error("this is the error", err);
        } else {
          newOrder.id = result.insertId;
        console.log(`your order id is ${result.insertId}`);
        
        }
      });
    }catch(err){
      res.status(400);
      next(err)
    }
  }
}
    
client.messages
.create({
   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
   // your number
   from: process.env.MY_NUMBER ,
   // number bought from twilio
   to: process.env.TWILIO_NUMBER
 })
.then(message => console.log(message.sid));
const twiml = new MessagingResponse();
twiml.message('The Robots are coming! Head for the hills!');

router.post('/', (req,res,next)=>{
  let body= req.body.Body;
  body = body.toLowerCase().split(' ');
  console.log(body);
  let response;
  if (body.includes("help")){
    response = "all available commands menu, order, status"
  }
  else if (body.includes("menu")){
    response = "type which can be pizza, burger or salad"
  }
  else if(body.includes("order")){
    response = createOrder(res,body[1])
  }
else{
  response = 'The Robots are coming! Head for the hills!';
}

sendMessage(res,response);

});

module.exports = router;