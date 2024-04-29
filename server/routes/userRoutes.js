//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS


const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers'); //changed the path to the controllers folder


// POST - /api/register - register a new user
router.post("/register", userControllers.registerNewUser)

// POST - /api/login - login a user
router.post("/login", userControllers.loginUser); //write endpoint here

//add update and delete endpoints /

//PUT - /api/update/:userName - update a user
router.put("/update", userControllers.updateUser); //write function in user controllers
router.delete("/delete", userControllers.delete); //delete function in user controllers
module.exports = router;