import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-center space-x-8 shadow-md sticky top-0 z-50">
      <Link to="/" className="hover:text-blue-400 font-semibold">
        🏠 Home
      </Link>
      <Link to="/games" className="hover:text-blue-400 font-semibold">
        🎮 Games
      </Link>
      <Link to="/signup" className="hover:text-blue-400 font-semibold">
        📝 Sign Up
      </Link>
      <Link to="/login" className="hover:text-blue-400 font-semibold">
        🔐 Login
      </Link>
      <Link to="/logout" className="hover:text-blue-400 font-semibold">
        🚪 Logout
      </Link>
      <Link to="/about" className="hover:text-blue-400 font-semibold">
        ℹ️ About Us
      </Link>
    </nav>
  );
};

export default Navbar;
