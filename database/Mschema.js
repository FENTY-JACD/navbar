const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  productID: Number,
  name: String,
  price: Number,
  foreground: String
});

module.exports = ProductsSchema;