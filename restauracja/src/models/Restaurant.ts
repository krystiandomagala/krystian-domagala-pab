const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  nazwa: String,
  adres: String,
  telefon: String,
  NIP: {
    type: String,
    required: true,
  },
  email: String,
  www: String,
});

module.exports = mongoose.model('Restaurant', restaurantSchema)