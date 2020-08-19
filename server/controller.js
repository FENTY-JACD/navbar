const helper = require('../database/dbHelpers');

const controller = {
  getAll: (req, res) => {
    helper.getAll((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  getSearch: (req, res) => {
    helper.getSearch(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
};

module.exports = controller;