import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here (e.g., API call)
    console.log("Logged in with:", email, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* <img src="C:\Users\jame\gaming-info-app\public\images/Screenshot_28-6-2025_15261_looka.com.jpeg" alt="logo" className="login-logo" /> */}
        <h2>Log into Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="login-options">
          <a href="#">Forgotten password?</a>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
