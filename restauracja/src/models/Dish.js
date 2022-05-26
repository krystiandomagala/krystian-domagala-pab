const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  nazwa: {
    type: String,
    required: true,
  },
  cena: Number,
  kategoria: {
    type:String,
    enum: ["pizza","makaron","zupa","deser","napoj","salatka"]
  }
});

const Dish = mongoose.model('Dish', dishSchema)
module.exports = Dish
