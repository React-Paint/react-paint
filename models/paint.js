const db = require('./dbConnect');

module.exports = {
  getAll(req, res, next) {
    db.any(`
      SELECT * FROM canvas;
      `)
      .then((canvas) => {
        res.rows = canvas;
        next();
      })
      .catch(error => next(error));
  },
};
