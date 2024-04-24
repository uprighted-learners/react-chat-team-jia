//server will be spun up
//Should look like this

// import dependencies
const express = require("express");
const cors = require("cors");

// create express app
const app = express();
const roomRoutes = require("../routes/roomRoutes");
// implement middleware
app.use(express.json());
app.use(cors());
app.use("/rooms", roomRoutes); //connector between app and room routes(localhost: PORT/rooms/<endPointName>)
// declare a PORT
const PORT = process.env.PORT || 8080;

// connect to MongoDB
require("./config/database");

// serve public directory
app.use(express.static("public"));

// GET - /api/health - check if API is alive or not
app.get("/api/health", async (req, res) => {
  try {
    res.send("Server is running");
  } catch (error) {
    console.log(error);
  }
});
mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create user endpoint
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create user endpoint
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));

// Display all rooms endpoint
app.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));

// Display all messages within a room endpoint
app.get("/rooms/:roomId/messages", async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.roomId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));

// Create a message within a room endpoint
app.post("/rooms/:roomId/messages", async (req, res) => {
  try {
    const message = new Message({
      room: req.params.roomId,
      content: req.body.content,
    });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

app.listen(3000, () => console.log("Server is running on port"));

// Update a message within a room endpoint
app.put("/rooms/:roomId/messages/:messageId", async (req, res) => {
  try {
    const message = await Message.findOne({
      _id: req.params.messageId,
      room: req.params.roomId,
    });
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    message.content = req.body.content;
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});
// Delete a message within a room endpoint
app.delete("/rooms/:roomId/messages/:messageId", async (req, res) => {
  try {
    const message = await Message.findOneAndDelete({
      _id: req.params.messageId,
      room: req.params.roomId,
    });
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));

// import routes
app.use("/api", require("./routes/users")); // users routes
app.use("/api", require("./routes/rooms")); // rooms routes

// spin up the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
