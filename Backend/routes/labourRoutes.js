
const express = require('express');
const router = express.Router();
const labourController = require('../controllers/labourController');


router.post('/register', labourController.register);
router.get('/profile',labourController.getLabourData)

module.exports = router;
