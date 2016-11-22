const db = require('../db/db');

function getMovies(req, res, next) {
  const query = `SELECT * FROM currentmovies;`;

  db.any(query)
  .then(data => {
    res.movie = data;
    next();
  })
  .catch(err => next(err));
}

function deleteMovie(req, res, next) {
 db.none(`DELETE FROM currentmovies WHERE id = $1;`, [req.params.id])
 .then(next())
 .catch( error => next(error));
}

function saveMovie(req, res, next) {
    db.none('INSERT INTO currentmovies (title, poster, rating, runtime) VALUES ($1, $2, $3, $4);', [req.body.Title, req.body.Poster, req.body.Rated, req.body.Runtime])
    .then((movie) => {
      res.movie = movie;
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  getMovies,
  deleteMovie,
  saveMovie,
};
