const mongoose = require("mongoose");

const Status = {
  wolny: 1,
  zajety: 2,
  niedostepny: 3,
};

Object.freeze(status);

const tableSchema = mongoose.Schema({
  nazwa: {
    type: String,
    required: true,
  },
  iloscOsob: {
    type: Number,
    required: true,
  },
  status: {
    type: Status,
    default: wolny,
  },
});

export const mongooseTable = mongoose.model("table", tableSchema);
module.exports = mongoose.model('Table', tableSchema)
