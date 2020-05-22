var mongoose = require('mongoose');
var schema = require('./Mschema');
mongoose.connect('mongodb://localhost/nav', { useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

// .model Mongoose compiles a model
// first argument is the singular name of the collection your model is for
var Product = mongoose.model('Product', schema);

module.exports = Product;