// pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    localStorage.setItem('signupData', JSON.stringify(formData));
    navigate('/otp');
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} />
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default SignUp;