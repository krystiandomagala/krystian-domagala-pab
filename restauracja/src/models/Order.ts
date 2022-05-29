import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  pracownik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  pozycje: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dish"
  }],
  statusZamowienia: {
    type: String,
    enum: ["zlozone", "wRealizacji", "zrealizowane", "rachunek"],
    required: true
  },
  stolik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
    required: true,
  },
  kwota: Number,
});

module.exports = mongoose.model('Order', orderSchema)
