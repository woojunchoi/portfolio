const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const sendmail = require('sendmail')();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname+ '/public'))

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.post('/send', function(req,res) {
    sendmail({
        to: 'tim.woojune1@gmail.com',
        subject: 'contact form woojun.com',
        text: req.body.message,
        from: req.body.email
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
})

app.listen(PORT)
