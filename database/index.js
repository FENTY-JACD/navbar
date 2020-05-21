const mysql = require('mysql');

//https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToInstance.html

const db = mysql.createConnection({
  // host: 'db.cjd9cquxgjfw.us-west-2.rds.amazonaws.com',
  // port: '3306',
  user: 'root',
  password: '',
  database: 'fenty_nav_videos',
  connectTimeout: 30000,
});

db.connect((err)=>{
  if (err) {
    throw err;
  } else {
    console.log('connected');
  }
});


module.exports = db;
// const config = require('./config');
// const mongoose = require('mongoose');
// const schema = require('./schema');
// mongoose.connection('mongodb://localhost/nav', { useUnifiedTopology: true, useNewUrlParser: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected');
// });

// var Products = mongoose.model('Products', schema);

// module.exports = Products;