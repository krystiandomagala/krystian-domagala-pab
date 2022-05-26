const mongoose = require("mongoose");

const dishSchema = mongoose.Schema({
  nazwa: {
    type: String,
    required: true,
  },
  cena: Number,
  kategoria: {
    type:String,
    enum: ["przystawka","danieGlowne","zupa","deser","napoj"]
  }
});

module.exports = mongoose.model('Dish', dishSchema)
