var express = require('express');
var router = express.Router();

const loanModel = require('../models/loans.model');

/* GET loans listing */
router.get('/', (req, res, next) => {
    res.send('respoding with a resource');
});

module.exports = router;