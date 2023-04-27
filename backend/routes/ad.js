const express = require('express');

const findAds = require('../controllers/findAds')


const router = express.Router();

router.get('/search',findAds);


module.exports = router;