//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// POST - /api/register - register a new user
router.post("/register", messageController.registerNewUser);

// POST - /api/login - login a user
router.post("/login", messageController.loginUser);

//Update /update/:Id/ - update a Message
router.put("/update", messageController.updateMessage);

module.exports = router;
