import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function formatCurrencyINR(amount) {
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  } catch (_) {
    return `₹${amount}`;
  }
}

function Cart() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, cartCount, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Cart</h1>
          {cartCount > 0 && (
            <button onClick={clearCart} className="text-sm text-red-600 hover:text-red-700">
              Clear cart
            </button>
          )}
        </div>

        {cartCount === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <Link to="/" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
                  <div className="h-20 w-20 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="object-contain h-full w-full" />
                    ) : (
                      <div className="text-gray-400 text-sm">No Image</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-red-600 font-medium">{formatCurrencyINR(item.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQuantity(item.id)} className="h-8 w-8 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="h-8 w-8 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">+</button>
                  </div>
                  <div className="w-24 text-right font-semibold text-gray-900">
                    {formatCurrencyINR(item.price * item.quantity)}
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-sm text-gray-500 hover:text-red-600">Remove</button>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                <div className="flex justify-between text-gray-700 mb-2">
                  <span>Items</span>
                  <span>{cartCount}</span>
                </div>
                <div className="flex justify-between text-gray-700 mb-4">
                  <span>Subtotal</span>
                  <span>{formatCurrencyINR(cartTotal)}</span>
                </div>
                <button onClick={() => navigate('/checkout')} className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                  Checkout
                </button>
                <p className="text-xs text-gray-500 mt-3">Taxes and shipping calculated at checkout.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;


