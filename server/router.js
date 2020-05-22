const router = require('express').Router();
const controller = require('./controller');

router
  .route('/products')
  .get(controller.getProducts)
  .post(controller.addProduct);

router
  .route('/search')
  .get(controller.searchProducts);

router
  .route('/products/:id')
  .delete(controller.deleteProduct)
  .put(controller.updatePrice);

router
  .route('/videos')
  .post(controller.searchProduct);

module.exports = router;
