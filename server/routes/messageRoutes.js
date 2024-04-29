//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/messageControllers');

// POST - /api/register - register a new user
// router.post('/register', messageControllers.registerNewUser);

// POST - /api/login - login a user
// router.post('/login', messageControllers.loginUser);

//Update /update/:Id/ - update a Message
// router.put('/update', messageControllers.updateMessage);

module.exports = router;
