var express = require('express');
var router = express.Router();

const customerModel = require('../models/customers.model');

/* GET customers listing */
router.get('/', (req,res,next) => {
res.send('respond with a resource');
})

module.exports = router;