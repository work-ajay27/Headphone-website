import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../resources/Logo.png';
import cartIcon from '../resources/cart.png';
import userIcon from '../resources/user.png';
import wishlistIcon from '../resources/online-shopping.png';

function Navbar() {
  const navigate = useNavigate();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const cartCount = 2; // Example cart count

  return (
    <nav className="navbar full-navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/deals">Deals</Link></li>
        </ul>
      </div>
      <div className="navbar-search-bar">
        <input type="text" placeholder="Search products..." />
        <button className="navbar-search-btn" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2" />
            <line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="navbar-right">
        <Link to="/wishlist" className="navbar-icon-btn">
          <img src={wishlistIcon} alt="Wishlist" className="navbar-icon" />
        </Link>
        <Link to="/cart" className="navbar-icon-btn navbar-cart-btn">
          <img src={cartIcon} alt="Cart" className="navbar-icon" />
          <span className="navbar-cart-badge">{cartCount}</span>
        </Link>
        <div className="navbar-user-wrapper" onBlur={() => setShowUserDropdown(false)} tabIndex={0}>
          <button className="navbar-icon-btn" onClick={() => setShowUserDropdown(v => !v)}>
            <img src={userIcon} alt="User" className="navbar-icon" />
          </button>
          {showUserDropdown && (
            <div className="navbar-user-dropdown">
              <button onClick={() => navigate('/login')}>Login</button>
              <button onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;