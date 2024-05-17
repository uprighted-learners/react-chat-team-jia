//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/messageControllers');

// post/ message/create/:id == creates a message in a room by id
router.post('/create/:id', messageControllers.createMessage);

// get == /message/get/:id == gets all messages by id
router.get('/get/:id', messageControllers.getMessages);

//put == /message/update/:id == updates a message byId
router.put('/update/:id', messageControllers.updateMessage);

//Delete == /message/delete/:id == deletes a message byId
router.delete('/delete/:id', messageControllers.deleteMessage);

module.exports = router;

