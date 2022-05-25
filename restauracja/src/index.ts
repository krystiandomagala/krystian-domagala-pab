import express from 'express'  
import { ChangeStreamDocument } from "mongodb";
import mongoose from "mongoose";
const bodyParser = require('body-parser');
const app = express()  

app.use(bodyParser.json())

//IMPORT ROUTES

const restaurantRoute = require('./routes/restaurant');
app.use('/restaurant', restaurantRoute)

//DATABASE CONNECTION

const connString = 'mongodb+srv://admin:admin@db.6c6zn.mongodb.net/?retryWrites=true&w=majority'

export async function dbmain() {
    console.log('Connecting to mongo');
    const db = await mongoose.connect(connString)
    console.log('Mongo Connected!')
}

dbmain()

app.listen(3000, () => console.log("Server started"))  