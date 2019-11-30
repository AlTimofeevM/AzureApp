const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '/public')
const passport = require('./config/passport')

const app = express();
const port = process.env.PORT || 80

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath))

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/auth/vkontakte',
  passport.authenticate('vkontakte'),
  function(req, res){
    // The request will be redirected to vk.com for authentication, so
    // this function will not be called.
  });

app.get('/auth/vkontakte/callback',
  passport.authenticate('vkontakte', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));