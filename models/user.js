const db = require('./dbConnect');

function getAllUsers(req, res, next) {
  db.any('SELECT * from users;')
    .then((user) => {
      res.rows = user;
      next();
    })
    .catch(error => next(error));
};

module.exports = {
  getAllUsers,
};
