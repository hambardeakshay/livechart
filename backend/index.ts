const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

// Connect to MongoDB
const mongoURI = "mongodb://127.0.0.1:27017/chart_database"; // Replace with your MongoDB connection string
mongoose
  .connect(mongoURI, {
    connectTimeoutMS: 1000,
    // Add more MongoDB connection options here if needed
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err: any) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello, Express with TypeScript!");
});

// Define routes and middleware here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
