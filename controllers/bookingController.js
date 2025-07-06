const Booking = require('../models/Booking');
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({ user: req.user.id, trip: req.body.tripId, people: req.body.people });
    await booking.save();
    res.json({ message: 'Trip booked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('trip');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
