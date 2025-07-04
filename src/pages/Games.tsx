import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types'; // make sure you have the Game type

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/games'); // 🔁 Update this if your backend uses another URL
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data: Game[] = await response.json();
        setGames(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading games...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🎮 All Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-gray-800 text-white rounded shadow p-4">
            <img src={game.image} alt={game.name} className="w-full h-56 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-1">{game.name}</h3>
            <p className="text-sm">Year: {game.year}</p>
            <p className="text-sm">Rating: ⭐ {game.rating}</p>
            <Link
              to={`/game/${game.id}`}
              className="mt-3 inline-block text-blue-400 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
