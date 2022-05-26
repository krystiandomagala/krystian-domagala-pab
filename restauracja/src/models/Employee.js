const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  imie: String,
  nazwisko: String,
  stanowisko: {
    type: String,
    enum: ["kucharz","kelner"],
    required: true
  }
});


const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee

