// backend/routes/api.js
const express = require("express");
const router = express.Router();

// Define routes here
router.get("/test", (req, res) => res.send("API route working"));

module.exports = router;
