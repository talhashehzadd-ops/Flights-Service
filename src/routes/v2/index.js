const express = require("express");

const {AboutController } = require('../../controllers/index')

const router = express.Router();

router.get('/about', AboutController.about);

module.exports = router; 
