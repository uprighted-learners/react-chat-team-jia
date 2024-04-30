//THIS IS WHERE ENDPOINTS GO
//!SHOULD LOOK LIKE THIS

const express = require('express');
const router = express.Router();
// should be in app.js

const roomControllers = require('../controllers/roomControllers');

// Create endpoint for room

//GET == "/getallrooms" == gets all rooms
router.get('/getallrooms', roomControllers.getAllRooms);

//POST == "/create" == creates one room
router.post('/create', roomControllers.createNewRoom);

//UPDATE == "/update/:name" == updates one room by name
router.put('/update/:name', roomControllers.updateRoomByName);

//DELETE == "/delete/:name" == deletes one room by name
router.delete('/delete/:name', roomControllers.deleteRoomByName);

module.exports = router;

