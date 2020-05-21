const config = require('./config');
const mongoose = require('mongoose');
const schema = require('./schema');
mongoose.connection('mongodb://localhost/nav', { useUnifiedTopology: true, useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected');
});

var Products = mongoose.model('Products', schema);

module.exports = Products;