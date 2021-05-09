const{ Router } = require('express');
const router = Router();

const {getProducts, getFilterProducts} = require('../controllers/products.controller');

router.get('/products',getProducts);
router.get('/products/:search',getFilterProducts);

module.exports = router;