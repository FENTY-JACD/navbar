const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  foreground: String
});

module.exports = schema;