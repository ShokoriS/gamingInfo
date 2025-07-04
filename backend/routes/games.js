// routes/games.js
const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// GET all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
