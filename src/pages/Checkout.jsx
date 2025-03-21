import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically:
    // 1. Validate the form
    // 2. Send the order to your backend
    // 3. Redirect to payment gateway
    navigate('/payment', { 
      state: { 
        orderDetails: {
          items,
          subtotal,
          shipping,
          total,
          customerInfo: formData
        }
      }
    });
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-medium mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border-b pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border-b pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border p-2 focus:outline-none focus:border-black"
                rows="3"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border-b pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border-b pb-2 focus:outline-none focus:border-black"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors"
            >
              PROCEED TO PAYMENT
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl mb-6">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-sm">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between text-sm font-medium pt-2 border-t">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;