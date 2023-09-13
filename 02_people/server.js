#!/usr/bin/node
// The overall structure of the server.js file is as follows:
// 1. Import the required modules
// 2. Initialize the app
// 3. Connect to the database
// 4. Define the routes
// 5. Start the server
// 6. Listen for requests
const express = require('express')
const colors =  require('colors')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')
const path = require('path');
const expressAsyncHandler = require('express-async-handler');
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
console.log(`${port}`.cyan.underline)

connectDB()

app.use(bodyParser.json()); // Apply JSON body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./people/people.js'))

app.get('/', (req, res) => {
    res.json({'status': 'success', 'message': 'Welcome to the people API'})
})

app.get('/status', (req, res) => {
    res.json({'status': 'success'})
})


app.listen(port, () =>
{
    console.log('welcome to the people api'.rainbow)
})
