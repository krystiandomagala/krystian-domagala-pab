const mongoose = require("mongoose");

const Kategoria = {
  przystawka: 1,
  danieGlowne: 2,
  zupa: 3,
  deser: 4,
  napoj: 5,
};

Object.freeze(Kategoria);

const dishSchema = mongoose.Schema({
  nazwa: {
    type: String,
    required: true,
  },
  cena: Number,
  kategoria: Kategoria,
});

export const mongooseDish = mongoose.model("dish", dishSchema);
module.exports = mongoose.model('Dish', dishSchema)
