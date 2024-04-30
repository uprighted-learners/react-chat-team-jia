// !THIS IS WHAT OUR SCHEMA SHOULD LOOK LIKE, BUT WE HAVE TO CHANGE IT TO CONST ROOMSCHEMA (CAMELCASE) ETC

const mongoose = require('mongoose');

// User Schema
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  addedUsers: {
    type: Array,
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for a User
module.exports = mongoose.model("room", roomSchema);