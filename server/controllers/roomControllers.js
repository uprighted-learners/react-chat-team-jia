const Room = require("../models/roomModel");

// // GET == "/getallrooms" == gets all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const allRooms = await Room.find({});
    if (allRooms.length === 0) throw Error("There are no rooms");
    res.status(200).json(allRooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// POST == "/create" == creates one room
exports.createNewRoom = async (req, res) => {
  try {
    const { name, description, addedUsers } = req.body;
    const newRoom = new Room({ name, description, addedUsers });
    // newRoom.addedUsers.push(addedUsers);
    await newRoom.save();
    res.status(200).json({ message: "Room Created", newRoom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// //UPDATE == "/update/:name" == updates one room by name
exports.updateRoomByName = async (req, res) => {
  try {
    const updatedRoom = await Room.updateOne({ name }, updatedRoom, {
      new: true,
    });
    if (!updatedRoom) {
      return res.status(200).json({ message: "Updated Room" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// //DELETE == "/delete/:name" == deletes one room by name
exports.deleteRoomByName = async (req, res) => {
  try {
    const name = req.params.name;
    //we need to find the specific room with specific name
    const deletedRoom = await Room.deleteOne({ name });
    if (!deletedRoom) throw Error("Room not found");
    res.status(200).json({ message: "Room has been deleted", deletedRoom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
