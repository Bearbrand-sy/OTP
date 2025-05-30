// utils/otpService.js (Mock)
export const sendOTP = (phone) => {
  console.log(`Sending OTP to ${phone}`);
  localStorage.setItem('mockOTP', '123456');
};

export const verifyOTP = (otp) => {
  return otp === localStorage.getItem('mockOTP');
};