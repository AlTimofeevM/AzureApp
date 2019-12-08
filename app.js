const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('./config/passport')
const path = require('path')
const publicPath = path.join(__dirname, '/public')
//const ansible =  require('./ansible/ansible')
const app = express();
const port = process.env.PORT || 80



app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath))

app.use(
  session({
    secret: 'hghtyNN23hbd54dstkhj2342asdfa3689jhf',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
  })
);


app.use(passport.initialize());
app.use(passport.session());
const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  }
  else {
    return res.redirect('/auth/vkontakte')
  }
}

app.get('/',  (req,res) => {
    res.render('index')
})

app.get('/check', (req,res) =>{
  res.send(process.env.AZURE_SUBSCRIPTION_ID)
})

app.get('/auth/vkontakte',
  passport.authenticate('vkontakte'),
  function(req, res){
  });

app.get('/auth/vkontakte/callback',
  passport.authenticate('vkontakte', { failureRedirect: '/auth/vkontakte' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

app.post('/button', auth, (req,res) => {
  //ansible.createVM()
  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));