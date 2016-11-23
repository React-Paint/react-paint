const db = require('./dbConnect');

function getAll(req, res, next) {
  db.any('SELECT * from canvas;')
    .then((canvas) => {
      res.rows = canvas;
      next();
    })
    .catch(error => next(error));
};

module.exports = {
  getAll,
};
