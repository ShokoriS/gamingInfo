const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  releaseDate: Date,
  genres: [String],
  platforms: [String],
  purchaseLinks: [
    {
      store: String,
      url: String,
    }
  ],
  images: [String],
  ratings: {
    metacritic: Number,
    user: Number,
  }
});

module.exports = mongoose.model('Game', gameSchema);
