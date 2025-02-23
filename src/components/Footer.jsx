import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [openSection, setOpenSection] = useState({
    support: false,
    company: false,
    terms: false
  });

  const toggleSection = (section) => {
    setOpenSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-gray-50 px-6 py-12 mt-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h3 className="font-medium">Sign Up</h3>
          <p className="text-sm text-gray-600">For regular updates and offers register here</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-gray-300 pb-2 bg-transparent focus:outline-none focus:border-black"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" className="text-gray-600 hover:text-black">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" className="text-gray-600 hover:text-black">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Support Links */}
        <div>
          <button 
            onClick={() => toggleSection('support')}
            className="w-full flex justify-between items-center py-2"
          >
            <h3 className="font-medium">SUPPORT</h3>
            {openSection.support ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <ul className={`space-y-2 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
            openSection.support ? 'max-h-40 mt-4' : 'max-h-0'
          }`}>
            <li><Link to="/contact" className="hover:text-black">CONTACT US</Link></li>
            <li><Link to="/return" className="hover:text-black">RETURN A PRODUCT</Link></li>
            <li><Link to="/track" className="hover:text-black">TRACK MY PRODUCT</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <button 
            onClick={() => toggleSection('company')}
            className="w-full flex justify-between items-center py-2"
          >
            <h3 className="font-medium">COMPANY</h3>
            {openSection.company ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <ul className={`space-y-2 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
            openSection.company ? 'max-h-40 mt-4' : 'max-h-0'
          }`}>
            <li><Link to="/about" className="hover:text-black">ABOUT US</Link></li>
          </ul>
        </div>

        {/* Terms and Privacy */}
        <div>
          <button 
            onClick={() => toggleSection('terms')}
            className="w-full flex justify-between items-center py-2"
          >
            <h3 className="font-medium">TERMS AND PRIVACY</h3>
            {openSection.terms ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <ul className={`space-y-2 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
            openSection.terms ? 'max-h-60 mt-4' : 'max-h-0'
          }`}>
            <li><Link to="/return-policy" className="hover:text-black">RETURN POLICY</Link></li>
            <li><Link to="/refund-policy" className="hover:text-black">REFUND POLICY</Link></li>
            <li><Link to="/shipping-policy" className="hover:text-black">SHIPPING POLICY</Link></li>
            <li><Link to="/terms" className="hover:text-black">TERMS AND CONDITION</Link></li>
            <li><Link to="/privacy" className="hover:text-black">PRIVACY POLICY</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-12 pt-8 border-t text-sm text-gray-600">
        <p>BBB. | IN© 2024 All Rights Reserved</p>
        <p>Powered by Majime</p>
      </div>
    </footer>
  );
};

export default Footer;