const mongoose = require("mongoose");

const JednostkaMiary = {
  g: 1,
  kg: 2,
  ml: 3,
  l: 4,
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
    type: JednostkaMiary,
    default: kg,
  },
});

module.exports = mongoose.model('Product', productSchema)
