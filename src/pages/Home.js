import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const allBanners = [
  'https://wallpapercave.com/wp/wp9908270.jpg',
  'https://wallpapercave.com/wp/wp11218534.jpg',
  'https://wallpapercave.com/wp/wp11721778.jpg',
  'https://wallpapercave.com/wp/wp11247511.jpg',
  'https://wallpapercave.com/wp/wp13604525.jpg',
  'https://wallpapercave.com/wp/wp11706490.jpg'
];

const Home = () => {
  const [popularGames, setPopularGames] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    setPopularGames([
      {
        id: 1,
        name: 'Elden Ring',
        year: 2022,
        rating: 9.5,
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg'
      },
      {
        id: 2,
        name: 'God of War: Ragnarok',
        year: 2022,
        rating: 9.3,
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
      },
      {
        id: 3,
        name: 'Horizon Forbidden West',
        year: 2022,
        rating: 8.9,
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg'
      },
      {
        id: 4,
        name: 'Cyberpunk 2077',
        year: 2020,
        rating: 8.5,
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
      },
      {
        id: 5,
        name: 'Red Dead Redemption 2',
        year: 2018,
        rating: 9.8,
        image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'
      },
      {
        id: 6,
        name: 'The Last of Us Part II',
        year: 2020,
        rating: 9.6,
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_Part_II_cover_art.jpg'
      },
      {
        id: 7,
        name: 'Ghost of Tsushima',
        year: 2020,
        rating: 9.1,
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Ghost_of_Tsushima.jpg'
      },
      {
        id: 8,
        name: 'Spider-Man: Miles Morales',
        year: 2020,
        rating: 8.7,
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Spider-Man_Miles_Morales_cover.jpg'
      },
      {
        id: 9,
        name: 'Assassin’s Creed Valhalla',
        year: 2020,
        rating: 8.3,
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Assassin%27s_Creed_Valhalla_cover.jpg'
      },
      {
        id: 10,
        name: 'Resident Evil Village',
        year: 2021,
        rating: 8.5,
        image: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Resident_Evil_Village.png'
      }
    ]);

    // Upcoming games with images
    const upcomingGamesData = [
      {
        id: 101,
        name: 'GTA 6',
        image: 'https://assets-prd.ignimgs.com/2023/12/04/gta6-1200x675-1701727635188.jpg'
      },
      {
        id: 102,
        name: 'Witcher 4',
        image: 'https://cdn.mos.cms.futurecdn.net/KhY5qHcH8kzWJLDzt9EEpM.jpg'
      },
      {
        id: 103,
        name: 'Star Wars Outlaws',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/2460900/header.jpg'
      },
      {
        id: 104,
        name: 'Black Myth: Wukong',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/1946100/header.jpg'
      },
      {
        id: 105,
        name: 'Dragon Age: Dreadwolf',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/00/Dragon_Age_Dreadwolf_art.jpg'
      }
    ];

    const shuffledUpcoming = [...upcomingGamesData].sort(() => 0.5 - Math.random());
    setUpcomingGames(shuffledUpcoming.slice(0, 4));

    // Set 3 random carousel images initially
    const shuffledBanners = [...allBanners].sort(() => 0.5 - Math.random());
    setCarouselImages(shuffledBanners.slice(0, 3));
  }, []);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % allBanners.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/login">Logout</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="carousel">
          <img
            src={allBanners[currentBannerIndex]}
            alt="banner"
            className="carousel-image"
          />
        </div>

        <h2 className="section-title">Popular Games</h2>
        <div className="game-list">
          {popularGames.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.image} alt={game.name} />
              <h4>{game.name}</h4>
              <p>Year: {game.year}</p>
              <p>Rating: ⭐ {game.rating}</p>
              <Link to={`/game/${game.id}`} className="btn btn-primary btn-sm">More Info</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar with Upcoming Games */}
      <div className="right-sidebar">
        <h3>Upcoming Games</h3>
        {upcomingGames.map((game, index) => (
          <div key={index} className="trailer-wrapper">
            <img
              src={game.image}
              alt={game.name}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '6px' }}
            />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
