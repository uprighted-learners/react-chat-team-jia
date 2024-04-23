//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require("express");
const router = express.Router();
const messageRoutes = require("../routes/messageRoutes");

// POST - /api/register - register a new user
router.post("/register", messageRoutes.registerNewUser);

// POST - /api/login - login a user
router.post("/login", messageRoutes.loginUser);

module.exports = router;
