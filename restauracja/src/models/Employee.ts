import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  imie: String,
  nazwisko: String,
  stanowisko: {
    type: String,
    enum: ["kucharz", "kelner"],
    required: true
  }
});


const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee

