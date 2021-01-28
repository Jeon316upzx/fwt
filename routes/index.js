var express = require('express');
var router = express.Router();

/* Home route */
router.get('/', (req, res, next) => {


  res.status(200).send({
                              "message": "My Rule-Validation API",
                              "status": "success",
                              "data": {
                                "name": "Ifeanyi Anuebunwa",
                                "github": "@Jeon316upzx",
                                "email": "jeon316@icloud.com",
                                "mobile": "08115891675",
                                "twitter": "@old_mustang_"
                              }
                        })
            });

module.exports = router;
