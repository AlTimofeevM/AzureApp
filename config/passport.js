const passport = require('passport')
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const User = require('../model/UserModel')

passport.use(new VKontakteStrategy({
    clientID:     6769250,
    clientSecret: "Bgky4Pwj4VPeEOKnfZCB",
    callbackURL:  "https://rocketazureapp.azurewebsites.net//auth/vkontakte/callback"
  },
  function(accessToken, refreshToken, params, profile, done) {
    User.findOrCreate({ vkontakteId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
module.exports = passport