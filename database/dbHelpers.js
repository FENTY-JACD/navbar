/* eslint-disable indent */
const db = require('./index.js');

const dbHelpers = {
  getProducts: (callback) => {
    let queryStr = 'SELECT * FROM products';
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  },
  searchProducts: (req, callback) => {
    console.log('Search from backend:', req.query.search);
    let queryStr = `SELECT * FROM products WHERE name LIKE '%${req.query.search}%'`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
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
        callback(null, results.rows);
      }
    });
  },
  updatePrice: (obj, id, callback) => {
    let queryStr = `UPDATE products SET price=${obj.price} WHERE id=${id};`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  }


};

module.exports = dbHelpers;
  
