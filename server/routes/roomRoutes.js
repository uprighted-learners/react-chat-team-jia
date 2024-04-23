//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require("express");
const router = express.Router();
// should be in app.js

// POST - /api/register - register a new user
router.post("/register", roomRoutes.addedUsers);

// POST - /api/login - login a user
router.post("/login", roomRoutes.loginUser);

module.exports = router;
