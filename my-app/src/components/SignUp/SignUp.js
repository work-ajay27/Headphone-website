import React, { useState } from 'react';
import '../Login/Login.css';  
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    // TODO: Add sign up logic
    alert(`Account created for: ${name} (${email})`);
  };

  return (
    <div className="flipkart-login-modal-bg">
      <div className="flipkart-login-modal">
        <div className="flipkart-login-left">
          <h2>Sign Up</h2>
          <p>Create your account to access the latest headphones, exclusive deals, and personalized recommendations!</p>
          <div className="flipkart-login-illustration">
            {/* Placeholder illustration */}
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
              <rect x="10" y="30" width="100" height="40" rx="8" fill="#fff" opacity="0.2" />
              <circle cx="60" cy="50" r="18" fill="#fff" opacity="0.2" />
              <rect x="40" y="45" width="40" height="10" rx="3" fill="#fff" opacity="0.2" />
            </svg>
          </div>
        </div>
        <div className="flipkart-login-right">
          <form className="flipkart-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="flipkart-login-input"
              autoComplete="name"
              required
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flipkart-login-input"
              autoComplete="username"
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="flipkart-login-input"
              autoComplete="new-password"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="flipkart-login-input"
              autoComplete="new-password"
              required
            />
            {error && <div className="flipkart-login-error">{error}</div>}
            <button type="submit" className="flipkart-login-btn">Create Account</button>
            <button type="button" className="google-login-btn" onClick={() => alert('Google sign up coming soon!')}>
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
              Sign up with Google
            </button>
          </form>
          <div className="flipkart-login-bottom-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;