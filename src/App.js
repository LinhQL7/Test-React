import React from 'react';
import Login from './auth/Login/Login';
import Register from './auth/Register/Register';
import UserPage from './userPage/UserPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/user-page' element={<UserPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<Login />} /> Default to Login for any undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;