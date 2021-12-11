var express = require('express');
var router = express.Router();

const paymentModel = require('../models/payments.model');

/* GET payments listing */
router.get('/', (req, res, next) => {
    res.send('responding with a resources');
});

module.exports = router;