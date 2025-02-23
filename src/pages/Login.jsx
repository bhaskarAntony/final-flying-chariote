import React, { useState, useEffect } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useEffect(() => {
    let timer;
    if (showOTP && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showOTP, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Handle sending OTP here
    setShowOTP(true);
    setTimeLeft(180);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification here
    console.log('Verifying OTP:', otp);
  };

  const handleResendOTP = () => {
    // Handle resending OTP here
    setTimeLeft(180);
  };

  const handleChangePhone = () => {
    setShowOTP(false);
    setOTP('');
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-md mx-auto">
        {!showOTP ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium mb-2">Login</h2>
              <p className="text-gray-600">Enter your phone and we'll send you a login code</p>
            </div>

            <form onSubmit={handlePhoneSubmit}>
              <div className="mb-6">
                <label className="block text-sm mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="9**** *****"
                  className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors"
              >
                CONTINUE
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium mb-2">Enter code</h2>
              <p className="text-gray-600">
                Sent to {phoneNumber}
                <button 
                  onClick={handleChangePhone}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  Change
                </button>
              </p>
            </div>

            <form onSubmit={handleOTPSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                  placeholder="6-digit code"
                  maxLength="6"
                  className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-black text-center text-2xl tracking-widest"
                  required
                />
                <div className="flex justify-between items-center mt-4 text-sm">
                  <span className="text-gray-600">
                    OTP expires in {formatTime(timeLeft)}
                  </span>
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className={`text-blue-600 hover:text-blue-800 ${
                      timeLeft > 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={timeLeft > 0}
                  >
                    resend otp
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors"
              >
                SUBMIT
              </button>
            </form>

            <button 
              onClick={handleChangePhone}
              className="w-full text-center mt-4 text-sm text-gray-600 hover:text-black"
            >
              Log in with different Phone
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;