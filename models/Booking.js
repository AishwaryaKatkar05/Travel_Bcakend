const mongoose = require('mongoose');
module.exports = mongoose.model('Booking', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
  people: Number,
  createdAt: { type: Date, default: Date.now }
}));