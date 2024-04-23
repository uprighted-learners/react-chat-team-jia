//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require("express");
const router = express.Router();
const usersRoutes = require("../routes/userRoutes");

// POST - /api/register - register a new user
router.post("/register", userRoutes.addedUsers);

// POST - /api/login - login a user
router.post("/login", usersRoutes.loginUser);

module.exports = router;
