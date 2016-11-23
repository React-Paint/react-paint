const db = require('./dbConnect');

function getAll(req, res, next) {
  db.any(`
    SELECT * FROM canvas;
  `)
    .then((canvas) => {
      res.rows = canvas;
      next();
    })
    .catch(error => next(error));
};

module.exports = {
  getAll,
};
