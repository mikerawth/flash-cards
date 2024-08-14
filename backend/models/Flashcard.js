// backend/models/Flashcard.js
const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Flashcard", FlashcardSchema);
