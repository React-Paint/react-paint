const { sqlDB } = require('./dbConnect');

module.exports = {
  getDrawings(req, res, next) {
    sqlDB.any(`
      SELECT * FROM canvas;
      `)
      .then((canvas) => {
        res.rows = canvas;
        console.log('num items: ', canvas.length);
        next();
      })
      .catch(error => next(error));
  },

  // the her method where sql grabs all data availible to the canvas

  addDrawing(req,res,next) {
    sqlDB.one(`
      INSERT INTO
        canvas(title,description,drawing,url, username)
      VALUES
        ($/title/, $/description/, $/drawing/, $/url/, $/username/)
      RETURNING *;
    `, req.body)
    .then((canvas) => {
      res.rows = canvas;
      next();
    })
    .catch(error => next(error));
  },

// add image to the canvas table along with title, description, background url and username
  getDrawing(req,res,next) {
    console.log(req.params);
    sqlDB.one(`
      SELECT * FROM canvas
      WHERE id = $/id/;
      `, req.params)
      .then(canvas => {
        res.rows = canvas;
        next();
      })
      .catch(err => next(err));
  },

// the method used to retreave one drawing when clicked to edit a picture. Image then is moved back to editing spot for further edits
  deletePainting(req, res, next) {
    sqlDB.none(`
      DELETE FROM canvas
      WHERE id = $/id/;
      `, req.params)
      .then(next())
      .catch( error => next(error));
  },

// delete image and its information stored with it from the gallery
};
