const express = require('express');
const router = express.Router();
const ScrapData = require("./search.js")
router.post('/products', ScrapData);

module.exports = router;