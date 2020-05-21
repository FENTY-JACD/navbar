/* eslint-disable indent */
const db = require('./index.js');

const dbHelpers = {
  getProducts: (callback) => {
    let query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  searchProducts: (req, callback) => {
    console.log('Search from backend:', req.query.search);
    let query = `SELECT * FROM products WHERE name LIKE '%${req.query.search}%'`;
    db.query(query, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  deleteProduct: (id, callback) => {
    let queryStr = `DELETE FROM products WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  addProduct: (name, price, foreground, callback) => {
    let queryStr = `INSERT INTO products (name, price, foreground) VALUES ('${name}', ${price}, '${foreground}');`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  updatePrice:(id, price, callback) => {
    let queryStr = `UPDATE products SET price=${price} WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }


};

module.exports = dbHelpers;
  
