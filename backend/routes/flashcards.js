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

// Get a single flashcard by ID
router.get("/:id", async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (flashcard == null) {
      return res.status(404).json({ message: "Flashcard not found" });
    }
    res.json(flashcard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a flashcard
router.put("/:id", async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (flashcard == null) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    // Update the flashcard properties
    if (req.body.title != null) {
      flashcard.title = req.body.title;
    }
    if (req.body.content != null) {
      flashcard.content = req.body.content;
    }

    const updatedFlashcard = await flashcard.save();
    res.json(updatedFlashcard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a flashcard
router.delete("/:id", async (req, res) => {
  try {
    const flashcard = await Flashcard.findById(req.params.id);
    if (flashcard == null) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    await Flashcard.deleteOne({ _id: req.params.id });
    res.json({ message: "Flashcard deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
