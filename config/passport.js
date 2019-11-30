const passport = require('passport')
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const UserModel = require('../model/UserModel')

passport.use(new VKontakteStrategy({
    clientID:     6769250,
    clientSecret: "Bgky4Pwj4VPeEOKnfZCB",
    callbackURL:  "/auth/vkontakte/callback"
  },
  function(accessToken, refreshToken, params, profile, done) {
    UserModel.findOne({ vkontakteId: profile.id }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        let user = UserModel.create({vkontakteId : profile.id})
      }
      return done(null, user);
    })
  }
));

module.exports = passport