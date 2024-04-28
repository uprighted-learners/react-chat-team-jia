const Message = require('../models/messageModel');

// make four crud function to handle messages

/* create a message` comment is providing a descriptive label for the following function
`createMessage`. This function is responsible for creating a new message by interacting with the
database and returning the created message in the response. */

// post/ message/create/:room == creates a message in a room
exports.createMessage = async (req, res) => {
  //I added this line to get the room from the request parameters, check with donte to see if it is good?
  const { room } = req.params;
  try {
    const message = new Message({
      room: req.params.room,
      body: req.body.body,
      user: req.body.user,
      date: Date.now(),
      // Add other message properties as needed
    });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get == /message/get/:room == gets all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.room });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//put == /message/update/:room == updates a message
exports.updateMessage = async (req, res) => {
  const { room } = req.room;
  try {
    const message = await new message.findOneAndUpdate({
      room: req.params.room,
      body: req.body.body,
      user: req.body.user,
      date: Date.now(),
    });
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete == /message/delete/:room == deletes a message
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndDelete({
      _id: req.params.messageId,
      room: req.params.room,
    });
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

