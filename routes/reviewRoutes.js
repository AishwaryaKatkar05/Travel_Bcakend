const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createReview } = require('../controllers/reviewController');
router.post('/', auth, createReview);
module.exports = router;