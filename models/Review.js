const mongoose = require('mongoose');
module.exports = mongoose.model('Review', new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
  review: String
}));