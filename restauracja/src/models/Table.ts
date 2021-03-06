import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  nazwa: {
    type: String,
    required: true,
  },
  iloscOsob: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['wolny', 'niedostepny', 'zajety'],
    default: 'wolny'
  },
});

const Table = mongoose.model('Table', tableSchema)
module.exports = Table
