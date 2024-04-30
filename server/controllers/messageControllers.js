const Message = require('../models/messageModel');

// make four crud function to handle messages

/* create a message` comment is providing a descriptive label for the following function
`createMessage`. This function is responsible for creating a new message by interacting with the
database and returning the created message in the response. */

// post/ message/create/:room == creates a message in a room
exports.createMessage = async (req, res) => {
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

//put == /message/update/:room/:id == updates a message byId
exports.updateMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndUpdate({
      _id: req.params.id,
      body: req.body.body,
    });
    if (!message) throw Error('Message not found');
    res.status(200).json({ message: 'Message updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete == /message/delete/:id == deletes a message byId
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndDelete({
      _id: req.params.id,
    });
    if (!message) throw Error('Message not found');
    res.status(200).json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

