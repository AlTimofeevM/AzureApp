const Tesseract = require( 'tesseract.js');
const db= require('../controller/dbController')



module.exports.recog = function(id, link, lang){
    Tesseract.recognize(
        link,
        lang,
        { logger: m => console.log(m) }
      ).then(async ({ data: { text } }) => {
        await db.updateImg(id,text)
      })
}
