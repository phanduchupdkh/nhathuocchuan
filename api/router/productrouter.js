var express = require('express');

var router = express.Router();

var controller = require('../controller/productcontroller')

router.get('/productsv', controller.productsv);

// router.get('/users', controller.users);

// router.get('/donhang', controller.donhang);

// router.get('/companys', controller.companys);

module.exports = router;