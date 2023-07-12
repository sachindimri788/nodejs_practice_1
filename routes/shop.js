const path = require('path');

const express = require('express');

const productsContoller=require('../controllers/product')
const adminData = require('./admin');

const router = express.Router();

router.get('/', productsContoller.getProducts);

module.exports = router;
