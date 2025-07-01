import React, { useEffect, useState } from 'react';
import './Games.css';
import { Link } from 'react-router-dom';
import gamesData from './gamesData';

const Games = () => {
  const [games, setGames] = useState([]);
useEffect(() => {
  setGames(gamesData);
}, []);


  return (
    <div className="games-container">
      <h2>Explore All Games</h2>
      <div className="games-grid">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>Year: {game.year}</p>
            <p>Rating: ⭐ {game.rating}</p>
            <Link to={`/game/${game.id}`} className="btn">More Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
