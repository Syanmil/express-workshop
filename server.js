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
console.log(books);
