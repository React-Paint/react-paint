const { sqlDB } = require('./dbConnect');


module.exports = {
  createUser(req, res, next) {
    sqlDB.none(`
      INSERT INTO users
        (username, password)
      VALUES ($/username/, $/password/);
      `, req.body)
      .then(next())
      .catch((err) => next(err));
  },

// when a user signsup, a user is created and added to the user table. all users have pass with them and usernames must be unique
  findByUsername(req,res,next) {
    sqlDB.one(`
      SELECT * FROM
        users
      WHERE
        username = $/username/;
      `, req.body)
      .then(user => {
        console.log('models user', user);
        res.user = user;
        next();
      })
      .catch(() => next({ password: false }));
  },

// function that is able to login users matching username and password in users table
};
