const searchYt = require('./youtube.js');
const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  getProducts: (req, res) => {
    dbHelpers.getProducts((err, results) => {
      if (err) {
        res.status(400).json(err);
      } else {
        // res.set('Cache-Control', 'max-age=31536000');
        res.status(200).json(results);
      }
    });
  },

  searchProducts: (req, res) => {
    dbHelpers.searchProducts(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // res.set('Cache-Control', 'max-age=31536000');
        res.status(201).json(results);
      }
    });
  },

  deleteProduct: (req, res) => {
    let { id } = req.params;
    dbHelpers.deleteProduct(id, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  },

  addProduct: (req, res) => {
    let { name, price, foreground } = req.body;
    dbHelpers.addProduct(name, price, foreground, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Product added');
      }
    });
  },
  updatePrice: (req, res) => {
    // update product's price at id
    let { id } = req.params;
    let { price } = req.body;
    dbHelpers.updatePrice(id, price, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Product\'s price updated');
      }
    });
  },

  searchProduct: (req, res) => {
    let productToSearch = req.query.productName;
    // console.log('Product Name:', productToSearch);
    searchYt(productToSearch, (results) => {
      res.status(202).send(results);
    });
  }
};