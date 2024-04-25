//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require("express");
const router = express.Router();
// should be in app.js

 const roomControllers = require("../controllers/roomControllers")
// POST - /api/register - register a new user

// router.post("/register", roomControllers.addedUsers);

// // POST - /api/login - login a user
// router.post("/login", roomControllers.loginUser);

module.exports = router;
