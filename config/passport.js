const passport = require('passport')
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const UserModel = require('../model/UserModel')
const ansible = require('../ansible/ansible')
passport.use(new VKontakteStrategy({
    clientID:     6769250,
    clientSecret: "Bgky4Pwj4VPeEOKnfZCB",
    callbackURL:  "https://rocketazureapp.azurewebsites.net/auth/vkontakte/callback"
  },
  function(accessToken, refreshToken, params, profile, done) {
    UserModel.findOne({ vkontakteId: profile.id }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        let user = UserModel.create({vkontakteId : profile.id, text: "", emotion: ""})
        ansible.createRG(profile.id)
      } 
      return done(null, user);
    })
  }
));

passport.serializeUser(function(user, done) {
  console.log('Сериализация: ', user)
  done(null, user.vkontakteId)
})

passport.deserializeUser(async function(id, done) {
  try{
    const user = await UserModel.findOne({ vkontakteId: id})
    if(!user) {
      return done(null, false)
    }
    else{
      return done(null, user)
    }
  }
  catch(err){
    return done(err)
  }
});

passport.use(VKontakteStrategy)

module.exports = passport