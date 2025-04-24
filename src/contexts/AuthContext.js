// File: src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // For demo purposes, we're using local storage to simulate authentication
  // In a real app, this would connect to Firebase Auth
  useEffect(() => {
    const user = localStorage.getItem('tailorUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Mock login function
  const login = (email, password) => {
    // In a real app, this would verify with Firebase Auth
    // For demo purposes, we'll accept any login with an @example.com domain
    if (email.endsWith('@example.com') && password.length >= 6) {
      const user = {
        uid: '1',
        email,
        displayName: email.split('@')[0],
        role: 'tailor',
      };
      localStorage.setItem('tailorUser', JSON.stringify(user));
      setCurrentUser(user);
      return Promise.resolve(user);
    } else {
      return Promise.reject(new Error('Invalid email or password'));
    }
  };

  // Mock logout function
  const logout = () => {
    localStorage.removeItem('tailorUser');
    setCurrentUser(null);
    return Promise.resolve();
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}