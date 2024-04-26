const { mongoose } = require('../db.js')

const DB_URI = process.env.MONGO_URI

const Room = require('./roomModel.js')

const User = new mongoose.Schema(
    {
     firstName: {type: String, required: true},
     lastName: {type: String, required: true},
     password: {type: String, required: true},
     timestamp: {type: Date, default: Date.now},
     isAdmin: {type: Boolean, default: false}, 
    })
    module.exports = mongoose.model('user', User )//data  has a dresscode