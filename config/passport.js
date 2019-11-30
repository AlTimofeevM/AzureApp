const passport = require('passport')
const OpenIDStrategy = require('passport-openid').Strategy;
const User = require('../model/UserModel')

passport.use(new OpenIDStrategy({
    returnURL: 'http://localhost/auth/openid/return',
    realm: 'http://localhost/'
  },
  function(identifier, done) {
    console.log(identifier)
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));

module.exports = passport