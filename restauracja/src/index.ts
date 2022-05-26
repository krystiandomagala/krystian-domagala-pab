import express from 'express'  
import mongoose from "mongoose";
const bodyParser = require('body-parser');
const app = express()  

app.use(bodyParser.json())

//IMPORT ROUTES

const restaurantRoute = require('./routes/restaurant');
app.use('/restaurant', restaurantRoute)

const tableRoute = require('./routes/tables');
app.use('/tables', tableRoute)

const employeeRoute = require('./routes/employees')
app.use('/employees', employeeRoute)

const bookingRoute = require('./routes/bookings')
app.use('/bookings', bookingRoute)

const productRoute = require('./routes/products')
app.use('/products', productRoute)

const dishRoute = require('./routes/dishes')
app.use('/dishes', dishRoute)

const orderRoute = require('./routes/orders')
app.use('/orders', orderRoute)

//DATABASE CONNECTION

const connString = 'mongodb+srv://admin:admin@db.6c6zn.mongodb.net/?retryWrites=true&w=majority'

export async function dbmain() {
    console.log('Connecting to mongo');
    const db = await mongoose.connect(connString)
    console.log('Mongo Connected!')
}

dbmain()

app.listen(3000, () => console.log("Server started"))  