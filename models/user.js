const { sqlDB } = require('./dbConnect');

function createUser(req, res, next) {
  sqlDB.none(`
    INSERT INTO users
      (username, password)
    VALUES ($1, $2);
    `, [req.body.username, req.body.password])
    .then(next())
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function findByUsername(username) {
  return sqlDB.one(`
    SELECT * FROM
      users
    WHERE
      username = $1
  `, [username]);
}

module.exports = {
  createUser,
  findByUsername
};
