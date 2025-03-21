import React from "react";

const ReturnPolicy = () => (
  <div className="max-w-3xl mx-auto p-6 space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Return Policy</h1>
    <p className="text-gray-600 leading-relaxed">
      At Flying Chariot, we strive to ensure your complete satisfaction with our products. If you are not entirely satisfied with your purchase, we're here to help.
    </p>
    <h2 className="text-2xl font-semibold text-gray-800">Eligibility for Returns</h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>Items must be returned within 30 days of the purchase date.</li>
      <li>Products should be unused, unwashed, and in their original packaging with all tags attached.</li>
      <li>Items marked as final sale cannot be returned or exchanged.</li>
    </ul>
    <h2 className="text-2xl font-semibold text-gray-800">Return Process</h2>
    <ol className="list-decimal list-inside text-gray-600">
      <li>Contact our customer support at support@flyingchariot.co.in to initiate a return.</li>
      <li>Provide your order number and the reason for the return.</li>
      <li>Ship the item back to us using a trackable shipping method. Please note that return shipping costs are the responsibility of the customer.</li>
    </ol>
    <h2 className="text-2xl font-semibold text-gray-800">Refunds</h2>
    <p className="text-gray-600 leading-relaxed">
      Once we receive your returned item, we will inspect it and notify you of the status of your refund. If approved, a refund will be processed to your original method of payment within 7-10 business days.
    </p>
    <h2 className="text-2xl font-semibold text-gray-800">Exchanges</h2>
    <p className="text-gray-600 leading-relaxed">
      If you wish to exchange an item for a different size or color, please follow the return process and place a new order for the desired item.
    </p>
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Contact Us</h3>
      <p className="mb-2">Email: support@flyingchariot.co.in</p>
      <p className="mb-2">Phone: +91 9353131613</p>
      <p>Address: Ground Floor, Jayanagar East End, Flying Chariot, Corporation Colony, Bengaluru, Karnataka 560069</p>
    </div>
  </div>
);

export default ReturnPolicy;
