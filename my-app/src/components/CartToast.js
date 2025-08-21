import React, { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';

function CartToast() {
  const { lastAddedToast } = useCart();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!lastAddedToast) return;
    setMessage(`${lastAddedToast.name} added to cart`);
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, [lastAddedToast]);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-6 z-[100]">
      <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

export default CartToast;


