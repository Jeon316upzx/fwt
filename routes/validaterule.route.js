const express = require('express');
const router = express.Router();

// Controllers
const { validationController } = require('../controllers/validation.controller')

//Validators
const { validate } = require('../validators/custom_validator')




router.post('', validate , validationController );



module.exports = router;
