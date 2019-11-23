const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '/public')


const app = express();
const port = process.env.PORT || 80

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath))

app.get('*', (req,res) => {
    res.render('index')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));