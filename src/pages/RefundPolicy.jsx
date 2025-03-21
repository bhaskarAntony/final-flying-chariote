import React from "react";

const RefundPolicy = () => (
  <div className="max-w-3xl mx-auto p-6 space-y-6">
    <h1 className="text-3xl font-bold text-gray-800">Refund Policy</h1>
    <p className="text-gray-600 leading-relaxed">
      At Flying Chariot, customer satisfaction is our priority. If you are not satisfied with your purchase, we offer refunds under the following conditions:
    </p>
    <h2 className="text-2xl font-semibold text-gray-800">Conditions for Refunds</h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>The return request must be made within 30 days of the purchase date.</li>
      <li>Items must be in their original condition, unused, unwashed, and with all tags attached.</li>
      <li>Items marked as final sale are not eligible for refunds.</li>
    </ul>
    <h2 className="text-2xl font-semibold text-gray-800">Refund Process</h2>
    <ol className="list-decimal list-inside text-gray-600">
      <li>Contact our customer support at support@flyingchariot.co.in to request a refund.</li>
      <li>Provide your order number and reason for the refund request.</li>
      <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
    </ol>
    <h2 className="text-2xl font-semibold text-gray-800">Refund Timeline</h2>
    <p className="text-gray-600 leading-relaxed">
      Approved refunds will be processed to your original method of payment within 7-10 business days. Please note that your bank or credit card company may take additional time to process and post the refund.
    </p>
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Contact Us</h3>
      <p className="mb-2">Email: support@flyingchariot.co.in</p>
      <p className="mb-2">Phone: +91 9353131613</p>
      <p>Address: Ground Floor, Jayanagar East End, Flying Chariot, Corporation Colony, Bengaluru, Karnataka 560069</p>
    </div>
  </div>
);

export default RefundPolicy;
