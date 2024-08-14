// backend/routes/flashcards.js
const express = require("express");
const router = express.Router();
const Flashcard = require("../models/Flashcard");

// Get all flashcards
router.get("/", async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new flashcard
router.post("/", async (req, res) => {
  const flashcard = new Flashcard({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const newFlashcard = await flashcard.save();
    res.status(201).json(newFlashcard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
