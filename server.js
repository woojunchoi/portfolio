const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const sendmail = require('sendmail')();


app.use(express.static(__dirname+ '/public'))

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.post('/send', function(req,res) {
    sendmail({
        to: 'tim.woojune1@gmail.com',
        subject: 'contact form woojun.com',
        text: req.body.message,
        from: req.body.email
      });
})

app.listen(3000)
console.log('server is running')
