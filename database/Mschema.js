const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  productID: Number,
  name: String,
  price: Number,
  foreground: String
});

module.exports = schema;