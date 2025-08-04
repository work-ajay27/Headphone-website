import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        // TODO: Add authentication logic
        alert(`Logged in as: ${email}`);
    };

    return (
        <div className="flipkart-login-modal-bg">
            <div className="flipkart-login-modal">
                <div className="flipkart-login-left">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    <div className="flipkart-login-illustration">
                        {/* Placeholder illustration */}
                        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                            <rect x="10" y="30" width="100" height="40" rx="8" fill="#fff" opacity="0.2" />
                            <circle cx="60" cy="50" r="18" fill="#fff" opacity="0.2" />
                            <rect x="40" y="45" width="40" height="10" rx="3" fill="#fff" opacity="0.2" />
                        </svg>
                        <i className='bx  bxs-headphone-alt-2' style={{ color: '#000000' }}></i>
                    </div>
                </div>
                <div className="flipkart-login-right">
                    <form className="flipkart-login-form" onSubmit={handleSubmit}>
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
                            autoComplete="current-password"
                            required
                        />
                        {error && <div className="flipkart-login-error">{error}</div>}
                        <button type="submit" className="flipkart-login-btn">Login</button>
                        <button type="button" className="google-login-btn" onClick={() => alert('Google login coming soon!')}>
                            <i className='bx bxs-headphone-alt-2' style={{ color: '#000000' }}></i>
                            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" className="google-logo" />
                            Login with Google
                        </button>
                    </form>
                    <div className="flipkart-login-bottom-link">
                        New to TechGear? <a href="/signup">Create an account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;