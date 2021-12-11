var express = require('express');
var router = express.Router();

const invoiceModel = require('../models/invoices.model');

/* GET invoices listing */
router.get('/', (req, res, next) => {
res.send('Responding with a resourse');
});

module.exports = router;