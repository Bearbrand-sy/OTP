// components/Topbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ name }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="topbar">
      <span className="profile">{name}</span>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Topbar;