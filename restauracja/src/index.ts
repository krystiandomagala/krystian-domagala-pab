import express from 'express'  
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()  

app.use(bodyParser.json())

//IMPORT ROUTES

const restaurantRoute = require('./routes/restaurant');
app.use('/restaurant', restaurantRoute)

//DATABASE CONNECTION

require('dotenv').config()
mongoose.connect('process.env.DATABASE_URL', ()=>console.log("Database connected"));

app.listen(3000, () => console.log("Server started"))  