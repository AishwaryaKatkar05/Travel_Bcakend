const express = require('express');
const router = express.Router();
const { login } = require('../controllers/AdminAuthController');
router.post('/login', login);
module.exports = router;
