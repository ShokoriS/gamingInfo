import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Your signup logic here (e.g., API call)
    console.log("Signed up with:", email, password);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* <img src="C:\Users\jame\gaming-info-app\public\images/Screenshot_28-6-2025_15261_looka.com.jpeg" alt="logo" className="signup-logo" /> */}
        <h2>Sign Up</h2>
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
            placeholder="New Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-options">
          <p>By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
