import React from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here
    localStorage.removeItem('user'); // or your auth token key
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="logout-page">
      <div className="logout-container">
        <h2>Are you sure you want to log out?</h2>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Logout;
