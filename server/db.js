const mongoose = require('mongoose');
// Replace <your_connection_string> with the actual connection string provided by MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;

async function connect() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect, mongoose };

