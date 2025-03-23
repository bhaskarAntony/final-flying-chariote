import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Wallet } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    if (!orderDetails) {
      navigate('/cart');
    }
  }, [orderDetails, navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      navigate('/order-confirmation', { 
        state: { 
          orderDetails,
          paymentMethod 
        }
      });
    }, 2000);
  };

  if (!orderDetails) return null;

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium mb-8">Payment</h1>

      <div className="mb-8">
        <h2 className="text-lg mb-4">Select Payment Method</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`p-4 border rounded-lg flex items-center gap-3 ${
              paymentMethod === 'card' ? 'border-black' : 'border-gray-200'
            }`}

          >
            <CreditCard size={24} />
            <span>Credit/Debit Card</span>
          </button>
          <button
            onClick={() => setPaymentMethod('upi')}
            className={`p-4 border rounded-lg flex items-center gap-3 ${
              paymentMethod === 'upi' ? 'border-black' : 'border-gray-200'
            }`}
          >
            <Wallet size={24} />
            <span>UPI</span>
          </button>
        </div>
      </div>

      {paymentMethod === 'card' ? (
        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full border-b pb-2 focus:outline-none focus:border-black"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : `Pay ₹${orderDetails.total}`}
          </button>
        </form>
      ) : (
        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">UPI ID</label>
            <input
              type="text"
              placeholder="username@upi"
              className="w-full border-b pb-2 focus:outline-none focus:border-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : `Pay ₹${orderDetails.total}`}
          </button>
        </form>
      )}

      <div className="mt-8 border-t pt-8">
        <h2 className="text-lg mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{orderDetails.subtotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>₹{orderDetails.shipping}</span>
          </div>
          <div className="flex justify-between text-sm font-medium pt-2 border-t">
            <span>Total</span>
            <span>₹{orderDetails.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;