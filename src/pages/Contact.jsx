import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-b pb-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border p-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl mb-6">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600">support@Flyingchariot.co.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6" />
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-600">+91 9353131613</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6" />
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <p className="text-gray-600">
                 ground floor, Jayanagar east end, Flying chariot, Corporation Colony, Bengaluru, Karnataka 560069
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl mb-6">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">What are your shipping times?</h3>
                <p className="text-gray-600">
                  We typically process and ship orders within 1-2 business days.
                  Delivery usually takes 3-5 business days within India.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for unused items in their
                  original packaging. Please see our returns page for more details.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Currently, we only ship within India. We're working on expanding
                  our shipping options to other countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;