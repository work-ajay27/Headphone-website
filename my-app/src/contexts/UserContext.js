import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext(null);
const USER_STORAGE_KEY = 'user_data_v1';

function readUserFromStorage() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) {
    return null;
  }
}

function writeUserToStorage(user) {
  try {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  } catch (_) {
    // ignore
  }
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => readUserFromStorage());
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    writeUserToStorage(user);
  }, [user]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
  };

  const updateProfile = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addOrder = (order) => {
    const newOrder = {
      ...order,
      id: `order_${Date.now()}`,
      date: new Date().toISOString(),
      status: 'pending'
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const value = {
    user,
    orders,
    login,
    logout,
    updateProfile,
    addOrder,
    isAuthenticated: !!user
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return ctx;
}
