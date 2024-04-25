
const express = require('express'); // Importing the express module
 const cors = require('cors');
 require('dotenv').config()

// Middleware setup
const app = express();
app.use(express.json());
app.use(cors()); // Uncomment this line if you want to use CORS middleware
app.use(express.static("public"));
// Importing routes
const roomRoutes = require("./routes/roomRoutes");
app.use("/rooms", roomRoutes);

const PORT = process.env.PORT || 8080;




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});