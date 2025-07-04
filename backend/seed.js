// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Game = require('./models/Game');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB');

    const sampleGames = [
      {
        title: 'Sample Game 1',
        releaseDate: '2020-01-01',
        images: ['https://via.placeholder.com/300x150.png?text=Game+1'],
        ratings: { metacritic: 80 },
      },
      {
        title: 'Sample Game 2',
        releaseDate: '2021-06-15',
        images: ['https://via.placeholder.com/300x150.png?text=Game+2'],
        ratings: { metacritic: 90 },
      }
    ];

    await Game.deleteMany({}); // clear collection
    await Game.insertMany(sampleGames);

    console.log('Sample games inserted');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });
