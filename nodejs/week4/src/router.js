const express = require('express');
const router= express.Router();
const bodyParser= require('body-parser');
console.log("id",process.env.ACCOUNT_SID);
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.get('/', (req,res)=>{
    res.send('Hello Fatemeh')
})

// b. to send message
client.messages
.create({
   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
   // your number
   from: '+4591771966',
   // number bought from twilio
   to: '+4592453779'
 })
.then(message => console.log(message.sid));

// c. receive sms


// hook that we setup in **Step 2** to receive sms
router.post('/incoming-sms', (req, res) => {
  // look in re.body to see incoming message
console.log(req);
  // response that you want to send back in response immediately
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

module.exports=router;
