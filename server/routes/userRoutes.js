//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers"); //changed the path to the controllers folder

// POST - /api/register - register a new user
router.post("/register", userControllers.registerNewUser); //write endpoint here

// POST - /api/login - login a user
// router.post("/login", userControllers.loginUser); //write endpoint here

//GET -/api/login -
router.get("/login", userControllers.getAllRooms);
//add update and delete endpoints /

//PUT - /api/update/:userName - update a user
router.put("/update", userControllers.updateUser); //write function in user controllers

//DELETE- /api/delete/:userName -delete a user
router.delete("/delete", userControllers.deleteUser);

module.exports = router;
