const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '/public')
let Chat = []

const app = express();
const port = process.env.PORT || 80

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath))

app.get('*', (req,res) => {
    res.render('index', {'Chat' : Chat})
})

app.post('/sendMessage', (req,res)=>{
    Chat.push({'username': req.body.username === '' ? 'Anonymous' : req.body.username, 'message' : req.body.message})
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));