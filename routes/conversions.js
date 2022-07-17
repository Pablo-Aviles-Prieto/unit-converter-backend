const express = require('express');

const convControllers = require('../controllers/conversion-controller');
const router = express.Router();

router.get('/saved-conversions', convControllers.getConversion);

router.post('/save-conversion', convControllers.saveConversion);

router.delete('/delete-session', convControllers.deleteConversion);

module.exports = router;
