const Tesseract = require( 'tesseract.js');
const db= require('../controller/dbController')



module.exports.recog = function(id, link){
    Tesseract.recognize(
        link,
        'eng',
        { logger: m => console.log(m) }
      ).then(async ({ data: { text } }) => {
        await db.updateImg(id,text)
      })
}
