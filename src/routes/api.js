const{ Router } = require('express');
const router = Router();

const {getProducts, getFilterProducts, getProductsByCategory} = require('../controllers/products.controller');

router.get('/products',getProducts);
router.get('/products/:search',getFilterProducts);
router.get('/products/category/:category',getProductsByCategory);

module.exports = router;