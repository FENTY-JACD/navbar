const express = require('express');
const router = express.Router();
const Product = require('../database/Mindex.js');

router.get('/products', (req, res) => {
  Product.find()
    .sort({ $natural: 1 })
    .limit(1000)
    .then(doc => {
      // console.log(doc)
      res.status(200).json(doc);
    })
    .catch(err => {
      console.error(err);
    });
});

router.get('/search', (req, res) => {
  Product.find({ "name": { $regex: req.query.search, $options: 'i' } })
    .limit(8)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.error(err);
    });
});
router.post('/products', (req, res) => {
  let { name, price, foreground } = req.body;
  Product.insertMany({
    name: name,
    price: price,
    foreground: foreground
  })
    .then(() => {
      res.status(200).send('Product added');
    })
    .catch(err => {
      console.error(err);
    });
});
module.exports = router;