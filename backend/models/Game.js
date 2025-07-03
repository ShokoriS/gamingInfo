const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: Date,
  images: [String],
  ratings: {
    metacritic: Number,
    user: Number
  },
  featured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Game', GameSchema);
