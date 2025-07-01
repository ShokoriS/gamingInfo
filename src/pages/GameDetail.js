import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gamesData from './gamesData';

const GameDetail = () => {
  const { id } = useParams();
  const game = gamesData.find(game => game.id === parseInt(id));

  if (!game) {
    return <h2>Game not found!</h2>;
  }

  return (
    <div style={{
      padding: '30px',
      maxWidth: '800px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{game.name}</h1>
      
      <img
        src={game.image}
        alt={game.name}
        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', marginBottom: '20px' }}
      />

      <p><strong>Year:</strong> {game.year}</p>
      <p><strong>Rating:</strong> ⭐ {game.rating}</p>
      <p><strong>Summary:</strong> {game.summary}</p>

      <Link to="/games" style={{
        display: 'inline-block',
        marginTop: '20px',
        color: '#007bff',
        textDecoration: 'none'
      }}>
        ← Back to all games
      </Link>
    </div>
  );
};

export default GameDetail;
