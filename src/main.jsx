import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/PrivateRoute.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <App />
</AuthProvider>
);
