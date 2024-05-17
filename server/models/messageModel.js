// !THIS IS WHAT OUR SCHEMA SHOULD LOOK LIKE, BUT WE HAVE TO CHANGE IT TO CONST MESSAGESCHEMA (CAMELCASE) ETC

// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  // Add other message properties as needed
});

module.exports = mongoose.model('Message', messageSchema);

