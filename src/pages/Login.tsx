// ✅ Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('user', JSON.stringify(data));
          window.location.href = '/';
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-700" placeholder="Email" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-700" placeholder="Password" required />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
