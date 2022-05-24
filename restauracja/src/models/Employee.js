const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  imie: String,
  nazwisko: String,
});

export const mongooseEmployee = mongoose.model("employee", employeeSchema);
module.exports = mongoose.model('Employee', employeeSchema)

