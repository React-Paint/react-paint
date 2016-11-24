const { sqlDB } = require('./dbConnect');

module.exports = {
  /*
  getAll(req, res, next) {
    sqlDB.any(`
      SELECT * FROM canvas;
      `)
      .then((canvas) => {
        res.rows = canvas;
        next();
      })
      .catch(error => next(error));
  },
  addPainting(req,res,next) {
    console.log(req.body);
    sqlDB.one(`
      INSERT INTO
        canvas
      VALUES
        ($/title/, $/despcription/, $/drawing/);
    `, req.body)
    .then((canva) => {
      res.rows = canva;
      next();
    })
    .catch(error => next(error));
  }
  */


};
