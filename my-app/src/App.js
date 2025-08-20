import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
