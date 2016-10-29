'use strict'

//NODE MODULES

//Express dependencies
const express = require('express');
const body-parser = require('body-parser');
const cors = require('cors');

//Initiate Express
const app = express();
const router = app.Router();

//APP Configuration

//req.body
app.use(bodyParser.urlencoded({extended:true})); //ditambah urlencoded agar dapat input dari form
app.use(bodyParser.json())
app.user(cors())

const data = require('./data.json')
