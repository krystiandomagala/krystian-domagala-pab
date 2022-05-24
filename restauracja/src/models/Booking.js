import mongooseTable from "./Table.js";
const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
  stolik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true,
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

export const tableBooking = bookingSchema.discriminator(
  "tableBooking",
  mongooseTable
);

module.exports = mongoose.model('Booking', bookingSchema)
