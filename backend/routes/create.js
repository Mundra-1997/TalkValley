const express = require('express');
const {createAd,createComp} = require('../controllers/dataCreation');
const router = express.Router();
router.post('/createAd',createAd);
router.post('/createComp',createComp);
module.exports = router;