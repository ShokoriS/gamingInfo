import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import AboutUs from './pages/AboutUs';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';  // <-- Add this import for the dynamic route

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/games" element={<Games />} />

        {/* Dynamic route for individual game pages */}
        <Route path="/game/:id" element={<GameDetail />} />

        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

