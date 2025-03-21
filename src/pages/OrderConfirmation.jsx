import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails, paymentMethod } = location.state || {};

  if (!orderDetails) {
    return (
      <div className="pt-24 px-6 text-center">
        <p>No order details found. Please return to the shop.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
        <h1 className="text-2xl font-medium mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">Thank you for your purchase</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-lg font-medium mb-4">Order Details</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Order Total</p>
              <p className="font-medium">₹{orderDetails.total}</p>
            </div>
            <div>
              <p className="text-gray-600">Payment Method</p>
              <p className="font-medium capitalize">{paymentMethod}</p>
            </div>
          </div>

          <div className="text-sm">
            <p className="text-gray-600">Shipping Address</p>
            <p className="font-medium">
              {orderDetails.customerInfo.firstName} {orderDetails.customerInfo.lastName}
            </p>
            <p>{orderDetails.customerInfo.address}</p>
            <p>
              {orderDetails.customerInfo.city}, {orderDetails.customerInfo.state} {orderDetails.customerInfo.pincode}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Items Ordered</h2>
        {orderDetails.items.map((item) => (
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
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/"
          className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;