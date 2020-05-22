const router = require('express').Router();
const Productsdata = require('../database/index.js');

router.get('/products', (req, res) => {
  Productsdata.find({ _id: { $lt: 500 } })
    // .exec()
    .then(doc => {
      // console.log(doc)
      res.status(200).json(doc);
    })
    .catch(err => {
      console.error(err);
    });
});
router.post('/search', (req, res) => {
  Productsdata.find({ "productname": { $regex: req.body.productname, $options: 'i' } })
    .limit(4)
    .exec()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
    });
});
module.exports = router;