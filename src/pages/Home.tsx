import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Game = {
  id: string;
  name: string;
  year: number;
  rating: number;
  image: string;
};

const Home = () => {
  const [popularGames, setPopularGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/games/popular') // Replace with your backend URL
      .then((res) => res.json())
      .then((data) => setPopularGames(data))
      .catch((err) => console.error('Failed to fetch games:', err));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold my-6">🔥 Popular Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <div key={game.id} className="bg-gray-800 p-4 rounded shadow">
            <img src={game.image} alt={game.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-3">{game.name}</h3>
            <p className="text-gray-400">Year: {game.year}</p>
            <p className="text-yellow-400">⭐ Rating: {game.rating}</p>
            <Link to={`/game/${game.id}`} className="mt-2 inline-block text-blue-500 hover:underline">
              More Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
