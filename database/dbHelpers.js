/* eslint-disable indent */
const db = require('./index.js');

const dbHelpers = {
  getAll: (callback) => {
    let queryStr = 'SELECT * FROM products order by id desc limit 1000000;';
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  },
  getSearch: (req, callback) => {
    console.log('Search from backend:', req.query);
    let queryStr = `SELECT * FROM products WHERE name LIKE '%${req.query.search}%' order by id desc limit 8`;
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
  
