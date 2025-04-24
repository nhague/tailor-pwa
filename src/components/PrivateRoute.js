// File: src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  // For development/testing: temporarily bypass authentication check
  // Comment out the next line and uncomment the line after for production
  return children;
  // return currentUser ? children : <Navigate to="/login" />;
}