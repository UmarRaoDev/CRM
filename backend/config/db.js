// //db.js is a database connection module responsible for establishing connectivity between the Node.js backend and MongoDB using Mongoose.

// It validates the MongoDB connection URI, configures Mongoose, establishes the connection, logs the connection details, and returns the connection object.

import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  // Check whether the MongoDB connection URI exists.
  if (!uri) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  // Configure Mongoose to use strict query behavior.
  mongoose.set("strictQuery", true);

  // Connect to MongoDB.
  // Mongoose waits up to 10 seconds while trying to select a suitable
  // MongoDB server. If it fails, an error is thrown.
  const conn = await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  // Log the MongoDB server host and database name after a successful connection.
  console.log(
    `mongodb connected: ${conn.connection.host}/ ${conn.connection.name}`
  );

  // Return the Mongoose connection object.
  return conn;
};