'use strict'

//NODE MODULES

//Express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initiate Express
const app = express();
const router = express.Router();

//APP Configuration

//req.body
app.use(bodyParser.urlencoded({extended:true})); //ditambah urlencoded agar dapat input dari form
app.use(bodyParser.json())
app.use(cors())

const books = require('./data.js');

//ROUTING
router.get('/books', (req, res)=>{
  res.send('books')
});

router.get('/ping', (req, res)=>{
  res.send('PONG!')
})

//Register Routes
app.use('/', router)

//RUN THE APP
const hostname = process.env.HOST || "localhost";
const port = process.env.PORT || "3000";

app.listen(port, hostname, (err)=>{
  if (err) console.log(err);
  console.log(`Server is running on ${hostname}:${port}`);
})
