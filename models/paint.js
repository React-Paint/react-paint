const db = require('./dbConnect');

function getAll(req, res, next) {

  db.any('SELECT * from canvas;')
    .then((canvas) => {
      res.canvas = canvas;
      next();
    })
    .catch(error => next(error));
}


// function addPainting(req, res, next) {

//     db.any('SELECT from canavas;')
//       .then((canvas) => {
//         res.canvas = canvas;
//         next();
//       })
//       .catch(error => next(error));
// }

module.exports = {
  getAll,
  addPainting
};
