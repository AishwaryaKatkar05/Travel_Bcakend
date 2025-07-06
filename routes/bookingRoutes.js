const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createBooking, getMyBookings } = require('../controllers/bookingController');
router.post('/', auth, createBooking);
router.get('/mybookings', auth, getMyBookings);
module.exports = router;
