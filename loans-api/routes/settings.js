var express = require('express');
var router = express.Router();

const settingModel = require('../models/settings.model');

/* GET settings listing */
router.get('/', (req, res, next) => {
    res.send('Responding with a resources');
});

module.exports = router;