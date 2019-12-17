const UserModel = require('../model/UserModel')

exports.addText= function(id,text){
    return UserModel.findOneAndUpdate({vkontakteId: id}, {text : text, emotion: "Обрабатывается" })
}


exports.findUserByVK = function(user_id){
    return UserModel.findOne({vkontakteId:user_id})
}