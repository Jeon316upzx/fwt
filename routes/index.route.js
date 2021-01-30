const express = require('express');
const router = express.Router();

const { homeController } = require('../controllers/index.controller')



/* Home route */
router.get('/', homeController);

module.exports = router;
