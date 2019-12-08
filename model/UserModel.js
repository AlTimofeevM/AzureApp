const mongoose = require('mongoose');
const connection = require('../config/db');

const userSchema = mongoose.Schema({
    vkontakteId: String,
    links : [String],
    texts : [String]
})

const User = connection.model('User', userSchema)

module.exports = User