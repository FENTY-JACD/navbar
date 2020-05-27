const router = require('express').Router();
const controller = require('./controller');

router
  .route('/products')
  .get(controller.getAll);
  
router
  .route('/search')
  .get(controller.getSearch);

module.exports = router;