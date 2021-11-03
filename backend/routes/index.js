const express = require('express');

const router = express.Router();
const indexController = require('../controllers');

router.get('/rss', indexController.getDataFromRSS);

module.exports = router;
