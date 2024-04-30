// !THIS IS WHAT OUR SCHEMA SHOULD LOOK LIKE, BUT WE HAVE TO CHANGE IT TO CONST ROOMSCHEMA (CAMELCASE) ETC

const mongoose = require('mongoose');

// User Schema
const roomSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for a User
module.exports = mongoose.model('room', roomSchema);
