const Tesseract = require( 'tesseract.js');
const UserModel = require('../model/UserModel')



module.exports.recog = function(id, link){
    Tesseract.recognize(
        link,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        UserModel.findOneAndUpdate({vkontakteId:id}, {$push : {texts : text}})
      })
}
