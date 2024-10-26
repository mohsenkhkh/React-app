import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Signup from './components/auth/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'; // Example component
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute'; // If you're using the PrivateRoute component
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <div></div>
              </PrivateRoute>
            }
          />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
