// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const flashcardRoutes = require("./routes/flashcards");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/api/flashcards", flashcardRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
