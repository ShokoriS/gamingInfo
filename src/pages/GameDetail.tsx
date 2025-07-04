import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Game } from '../types'; // ✅ your type

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/games/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game');
        }
        const data: Game = await response.json();
        setGame(data);
      } catch (err: any) {
        setError(err.message || 'Error loading game');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchGame();
  }, [id]);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!game) return <p className="text-center text-red-500">Game not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{game.name}</h1>

      <img
        src={game.image}
        alt={game.name}
        className="w-full max-h-96 object-cover rounded mb-6"
      />

      <p className="mb-2"><strong>Year:</strong> {game.year}</p>
      <p className="mb-2"><strong>Rating:</strong> ⭐ {game.rating}</p>
      {game.summary && (
        <p className="mb-4"><strong>Summary:</strong> {game.summary}</p>
      )}
      {game.purchaseLink && (
        <a
          href={game.purchaseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-500 underline"
        >
          Buy Now
        </a>
      )}

      <div className="mt-6">
        <Link
          to="/games"
          className="text-sm text-gray-400 hover:text-white hover:underline"
        >
          ← Back to Games
        </Link>
      </div>
    </div>
  );
};

export default GameDetail;
