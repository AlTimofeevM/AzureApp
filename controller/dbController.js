const ImgModel = require('../model/ImgModel')
const UserModel = require('../model/UserModel')

exports.addImg = function(link){
    return ImgModel.create({link: link, text : "Картинка обрабатывается"})
}

exports.updateImg = function(id, text){
    return ImgModel.findOneAndUpdate({_id:id}, {text : text})
}

exports.addImgToUser = function(user_id, img_id){
    return UserModel.findOneAndUpdate({vkontakteId:user_id},{$push : {imgs : img_id}})
}

exports.getHistory = async function(user_id){
    let User = await UserModel.findOne({vkontakteId:user_id})
    let Imgs = []
    for(let id of User.imgs){
        let img = await ImgModel.findOne({_id: id})
        Imgs.push(img)
    }
    return Imgs
}