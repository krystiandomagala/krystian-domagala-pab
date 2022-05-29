import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
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