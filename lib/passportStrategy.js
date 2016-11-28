const User          = require('../models/user.js');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy   = require('passport-jwt').Strategy;
const JwtOpts       = {};

secret='gitmaster'
JwtOpts.jwtFromRequest = function(req) {
  var token = null;
  if (req && req.cookies) {
      token = req.cookies['jwt_token'];
  }
  return token;
};

JwtOpts.secretOrKey = secret;

// TODO: Not needed?
// JwtOpts.issuer = "accounts.examplesoft.com";
// JwtOpts.audience = "yoursite.net";

passport.use(new JwtStrategy(JwtOpts, (jwtToken, done) => {
  User.findByUsername(jwtToken.username).then((user) => {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
      // or you could create a new account
    }
  });
}));

passport.use(new LocalStrategy((username, password, done) => {
  User.findByUsername(username).then((user) => {
    if (!user) {
      // If we want to send back flash messages with a description of the error
      // We would need to install express-flash for this to work

      // return done(null, false, { message: 'Incorrect username.' });
      return done(null, false);
    }

    if (user.password !== password) {
      // return done(null, false, { message: 'Incorrect password.' });
      return done(null, false);
    }

    return done(null, user);
  });
}));


module.exports = passport;
