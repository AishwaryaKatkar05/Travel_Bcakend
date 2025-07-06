const mongoose = require('mongoose');
module.exports = mongoose.model('Tour', new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  date: Date,
  image: String
}));