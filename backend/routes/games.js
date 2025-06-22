const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// GET all games (just titles for now)
router.get('/', async (req, res) => {
  try {
    const games = await Game.find({}, 'title');
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
