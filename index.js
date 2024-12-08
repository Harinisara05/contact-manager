import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express(); // Define the Express app here

// Ensure PORT and MONGO_URI are defined
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in the .env file.");
  process.exit(1); // Exit the process with failure
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully.");
    // Start the server only after a successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with failure
  });
