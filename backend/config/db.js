const mongoose = require("mongoose");

/**
 * Create a connection to MongoDB using `process.env.MONGODB_URI`.
 * Throws an error if the URI is not set or the connection fails.
 * @async
 * @returns {Promise<void>} resolves when the connection is established
 */
async function connectDB() {
  const uri = process.env.MONGODB_URI;

  await mongoose.connect(uri);

  console.log("MongoDB connected");
}

module.exports = connectDB;
