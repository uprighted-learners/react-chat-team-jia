//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS


const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers'); //changed the path to the controllers folder


// POST - /users/register - register a new user
router.post("/register", userControllers.registerNewUser)

// POST - /users/login - login a user
router.post("/login", userControllers.loginUser); //write endpoint here

//add update and delete endpoints /

//PUT - /users/update/:id - update a user by id 
router.put("/update/:id", userControllers.updateUser); //write function in user controllers
//delete - /users/delete/:id - update a user by id 
router.delete("/delete/:id", userControllers.delete); //delete function in user controllers
module.exports = router;