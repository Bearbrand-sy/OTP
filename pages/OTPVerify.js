// pages/OTPVerify.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOTP, verifyOTP } from '../utils/otpService';

const OTPVerify = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('signupData'));

  React.useEffect(() => {
    if (user) {
      sendOTP(user.phone);
    }
  }, []);

  const handleVerify = () => {
    if (verifyOTP(otp)) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {
      setError('Invalid OTP');
    }
  };

  return (
    <div className="auth-container">
      <h2>Enter OTP</h2>
      <input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default OTPVerify;