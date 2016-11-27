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
  addDrawing(req,res,next) {
    sqlDB.one(`
      INSERT INTO
        canvas(title,description,drawing,url)
      VALUES
        ($/title/, $/description/, $/drawing/, $/url/)
      RETURNING *;
    `, req.body)
    .then((canvas) => {
      res.rows = canvas;
      next();
    })
    .catch(error => next(error));
  },
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
  }
  /*
  getAllDrawings(req,res,next) {
    mongoDB().then((db) => {
      db.collection('canvas')
      .find({})
      .toArray((err, data) => {
        if(err) return next(err);
        res.rows = data;
        db.close();
        next();
      });
      return false;
    });
    return false;
  },
  addDrawing(req,res,next) {
    console.log(req.body.drawing);
    const canvObj = {
      cavasData: Array.from(req.body.drawing),
    }
    mongoDB().then(db => {
      db.collection('canvas')
      .insert(canvObj, (err, drawing) => {
        if (err) return next(err);
        res.row = drawing;
        console.log(drawing);
        db.close()
        next();
      });
      return false;
    });
    return false;
  },
  */
};
