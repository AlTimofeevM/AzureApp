const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('./config/passport')
const path = require('path')
const publicPath = path.join(__dirname, '/public')
const rec = require('./text_recog/textrecog')
const UserModel = require('./model/UserModel')
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
    return res.redirect('/login')
  }
}

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/login', (req,res) =>{
    res.render('login')
})

app.get('/auth/vkontakte',
  passport.authenticate('vkontakte'),
  function(req, res){
  });

app.get('/auth/vkontakte/callback',
  passport.authenticate('vkontakte', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
});

app.post('/button', async (req,res) => {
  let link = req.body.link
  await UserModel.findOneAndUpdate({vkontakteId:req.user.vkontakteId}, {$push : {links: link}, $push : {texts : "Картинка обрабатывается"}})
  rec.recog(req.user.vkontakteId,link)
  res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));