/**
 * Server entrypoint for the Employee Directory API.
 * Sets up middleware, routes, and starts the HTTP server after
 * establishing a MongoDB connection.
 * @module server
 */
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow frontend requests
app.use(cors());

// Read JSON data from requests
app.use(express.json());

// Employee routes
app.use("/api/employees", employeeRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Employee Directory API is running",
  });
});

/**
 * Start the application after connecting to the database.
 * @returns {void}
 */
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
