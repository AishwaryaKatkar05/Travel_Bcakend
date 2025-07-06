const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const { createTour, getTours } = require('../controllers/tourController');
router.post('/', auth, upload.single('image'), createTour);
router.get('/', getTours);
module.exports = router;