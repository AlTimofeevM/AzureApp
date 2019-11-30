const mongoose = require('mongoose');
const connection = require('../config/db');

const userSchema = mongoose.Schema({
    openId: String,
})

const User = connection.model('User', userSchema)

module.exports = User