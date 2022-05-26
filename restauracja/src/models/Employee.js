const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  imie: String,
  nazwisko: String,
});

module.exports = mongoose.model('Employee', employeeSchema)

