const mongoose = require('mongoose')
// Replace <your_connection_string> with the actual connection string provided by MongoDB Atlas
const uri = process.env.MONGO_URI

async function connect() {
   try{
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to MongoDB Atlas')
   }catch (error){
    console.log(error)
   }
}

module.exports = {connect, mongoose}
