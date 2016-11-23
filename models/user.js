const db = require('./dbConnect');

module.exports = {
  getAllUsers(req, res, next) {
    db.any(`
      SELECT * from users;
    `)
      .then((user) => {
        res.rows = user;
        next();
      })
      .catch(error => next(error));
  },
};
