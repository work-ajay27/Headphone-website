import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import CartToast from './components/CartToast';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import Deals from './components/Deals';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { UserProvider } from './contexts/UserContext';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <WishlistProvider>
          <div>
            <Navbar />
            <CartToast />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/deals" element={<Deals />} />
            </Routes>
          </div>
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
