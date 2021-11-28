// Modules
const express = require('express');
const router = express.Router();

// Resources
const { ItemResources } = require('../resources');

// All routes
router.use('/', ItemResources);

module.exports = router;
