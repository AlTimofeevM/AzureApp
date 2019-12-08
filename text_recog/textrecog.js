const Tesseract = require( 'tesseract.js');
const ImgModel = require('../model/ImgModel')



module.exports.recog = function(id, link){
    Tesseract.recognize(
        link,
        'eng',
        { logger: m => console.log(m) }
      ).then(async ({ data: { text } }) => {
        await ImgModel.findOneAndUpdate({_id:id}, {text : text})
      })
}
