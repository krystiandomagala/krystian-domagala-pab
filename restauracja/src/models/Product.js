const mongoose = require("mongoose");

const JednostkaMiary = {
  g: 1,
  kg: 2,
  ml: 3,
  l: 4,
  szt: 5
};

Object.freeze(JednostkaMiary);

const productSchema = mongoose.Schema({
  nazwa: {
    type: String,
    required: true,
  },
  cena: Number,
  ilosc: Number,
  jednostkaMiary: {
    type: String,
    enum: ['g','kg','ml','l','szt'],
    default: "kg",
  },
});

module.exports = mongoose.model('Product', productSchema)
