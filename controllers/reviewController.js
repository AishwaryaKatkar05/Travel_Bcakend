const Review = require('../models/Review');
exports.createReview = async (req, res) => {
  try {
    const review = new Review({ user: req.user.id, trip: req.body.tripId, review: req.body.review });
    await review.save();
    res.json({ message: 'Review added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};