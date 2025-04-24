// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ClientList from './pages/ClientList';
import ClientDetail from './pages/ClientDetail';
import MeasurementTools from './pages/MeasurementTools';
import OrderList from './pages/OrderList';
import OrderDetail from './pages/OrderDetail';
import AppointmentCalendar from './pages/AppointmentCalendar';
import MessageCenter from './pages/MessageCenter';
import TravelSchedule from './pages/TravelSchedule';
import InventoryView from './pages/InventoryView';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './App.css';

// Create a theme instance with the tailor app color palette
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#124559', // Deep Teal
    },
    secondary: {
      main: '#598392', // Muted Teal
    },
    accent: {
      main: '#EFC88B', // Gold
    },
    error: {
      main: '#D64045', // Vermilion
    },
    success: {
      main: '#5B8C5A', // Forest Green
    },
    warning: {
      main: '#F9A826', // Amber
    },
    info: {
      main: '#3A7CA5', // Blue
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#121212',
      secondary: '#6E6E6E',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '36px',
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '32px',
      fontWeight: 300,
    },
    h3: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '28px',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '24px',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '20px',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '18px',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '16px',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: 'Beatrice, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

// Create a dark theme variant
const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#1A6980', // Primary Dark
    },
    secondary: {
      main: '#7AAEBB', // Secondary Dark
    },
    accent: {
      main: '#FFD699', // Accent Dark
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const currentTheme = darkMode ? darkTheme : theme;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <AuthProvider>
        <Router basename="/tailor-pwa">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <Dashboard />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/clients"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <ClientList />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/clients/:id"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <ClientDetail />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/measurements"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <MeasurementTools />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <OrderList />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <OrderDetail />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <AppointmentCalendar />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/messages"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <MessageCenter />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/travel"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <TravelSchedule />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/inventory"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <InventoryView />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <Analytics />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
                    <Settings />
                  </Layout>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;