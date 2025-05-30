// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signUp';
import OTPVerify from './pages/OTPVerify';
import Home from './pages/home';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/otp" element={<OTPVerify />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;