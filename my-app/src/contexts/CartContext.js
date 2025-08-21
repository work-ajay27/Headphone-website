import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const LOCAL_STORAGE_KEY = 'cart_items_v1';

function readCartFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (_) {
    return [];
  }
}

function writeCartToStorage(items) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  } catch (_) {
    // ignore
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readCartFromStorage());
  const [lastAddedToast, setLastAddedToast] = useState(null);

  useEffect(() => {
    writeCartToStorage(cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    // Expected product: { id, name, price, image }
    if (!product || !product.id) return;
    const numericPrice = typeof product.price === 'number'
      ? product.price
      : parseInt(String(product.price).replace(/[^\d]/g, ''), 10) || 0;

    setCartItems((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        const clone = [...prev];
        clone[index] = { ...clone[index], quantity: clone[index].quantity + 1 };
        return clone;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name || 'Item',
          price: numericPrice,
          image: product.image || null,
          quantity: 1,
        },
      ];
    });

    // trigger toast info
    setLastAddedToast({ id: Date.now(), name: product.name || 'Item' });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems((prev) => prev.map((p) => (p.id === productId ? { ...p, quantity: p.quantity + 1 } : p)));
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prev) => prev
      .map((p) => (p.id === productId ? { ...p, quantity: p.quantity - 1 } : p))
      .filter((p) => p.quantity > 0));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const cartTotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartCount,
    cartTotal,
    lastAddedToast,
  }), [cartItems, cartCount, cartTotal, lastAddedToast]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}


