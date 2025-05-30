// pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Topbar from '../components/topbar';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  React.useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <div className="home">
      <Sidebar />
      <div className="content">
        <Topbar name={user?.name} />
        <h2>Welcome, {user?.name}!</h2>
      </div>
    </div>
  );
};

export default Home;