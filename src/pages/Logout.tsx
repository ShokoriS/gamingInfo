// ✅ Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user'); // Clear auth data
    navigate('/login');
  }, [navigate]);

  return (
    <div className="text-white p-6">Logging out...</div>
  );
};

export default Logout;
