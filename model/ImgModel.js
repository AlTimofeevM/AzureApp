const mongoose = require('mongoose');
const connection = require('../config/db');

const imgSchema = mongoose.Schema({
    link : String,
    text : String
})

const Img = connection.model('Img', imgSchema)

module.exports = Img