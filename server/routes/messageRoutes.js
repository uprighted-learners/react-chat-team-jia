//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/messageControllers');

// post/ message/create:room == creates a message in a room
router.post('/create/:room', messageControllers.createMessage);

// get == /message/get/:room == gets all messages
router.get('/get/:room', messageControllers.getMessages);

//put == /message/update/:room == updates a message
router.put('/update/:room', messageControllers.updateMessage);

//Delete == /message/delete/:room == deletes a message
router.delete('/delete/:room', messageControllers.deleteMessage);

module.exports = router;

