const mongoose = require('./node_modules/mongoose')


mongoose.connect(
    'mongodb://user:password123@ds059947.mlab.com:59947/azureapp',
    { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
)

const connection = mongoose.connection

connection.on('error', function(){
    console.log('Connect error')
})

connection.once('open', async function(){
    console.log('MongoDB successfully connected')
})

module.exports = connection