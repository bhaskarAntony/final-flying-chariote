import React from "react";


const ShippingPolicy = () => (
  <div className="max-w-3xl mx-auto p-6 space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Shipping Policy</h1>
    <p className="text-gray-600 leading-relaxed">
      At Flying Chariot, we ensure timely and safe delivery of your orders. Please read the following shipping policy details.
    </p>
    <h2 className="text-2xl font-semibold text-gray-800">Shipping Methods & Timelines</h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>Standard shipping: 5-7 business days</li>
      <li>Express shipping: 2-3 business days</li>
      <li>Orders are processed within 24-48 hours.</li>
    </ul>
    <h2 className="text-2xl font-semibold text-gray-800">Shipping Charges</h2>
    <p className="text-gray-600 leading-relaxed">
      Shipping charges depend on the delivery location and selected shipping method. Free shipping is available for orders above ₹999.
    </p>
    <h2 className="text-2xl font-semibold text-gray-800">Order Tracking</h2>
    <p className="text-gray-600 leading-relaxed">
      Once your order is shipped, you will receive a tracking number via email to monitor the delivery status.
    </p>
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Contact Us</h3>
      <p className="mb-2">Email: support@flyingchariot.co.in</p>
      <p className="mb-2">Phone: +91 9353131613</p>
      <p>Address: Ground Floor, Jayanagar East End, Flying Chariot, Corporation Colony, Bengaluru, Karnataka 560069</p>
    </div>
  </div>
);

export {  ShippingPolicy };
