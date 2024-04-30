const express = require('express'); // Importing the express module
const cors = require('cors');
require('dotenv').config();
const { connect } = require('./db.js');


// Middleware setup
const app = express();
app.use(express.json());
app.use(cors()); // Uncomment this line if you want to use CORS middleware
app.use(express.static('public'));
// Importing routes
const roomRoutes = require('./routes/roomRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
app.use('/rooms', roomRoutes);
app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

