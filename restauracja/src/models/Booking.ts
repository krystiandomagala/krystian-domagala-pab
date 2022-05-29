import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
  stolik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
  },
  start: {
    type: Date,
    default: Date.now(),
  },
  koniec: Date,
  klient: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Booking', bookingSchema)
