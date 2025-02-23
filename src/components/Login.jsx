import React, { useState } from 'react';
import { X } from 'lucide-react';

const Login = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with phone:', phoneNumber);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white p-8">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2">Login</h2>
          <p className="text-gray-600">Enter your phone and we'll send you a login code</p>
        </div>

        <form onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default Login;