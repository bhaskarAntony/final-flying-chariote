import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, Instagram, Facebook } from "lucide-react";
import { useCart } from "../context/CartContext";
import logo from '../assets/logo.png'

const Navbar = () => {
  const { items, setIsCartOpen } = useCart();
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white z-50 px-6 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* EXPLORE Menu (Hidden on mobile, only for larger screens) */}
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setShowExploreMenu(true)}
            onMouseLeave={() => setShowExploreMenu(false)}
          >
            <span className="text-xl font-bold cursor-pointer">EXPLORE</span>
            {showExploreMenu && (
              <div className="absolute top-full left-0 w-screen bg-white z-40 border-b shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-4">
                  {/* Explore Menu Sections */}
                  {renderExploreLinks(setShowExploreMenu)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} width={100} alt="" />
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Search size={24} />
          <button onClick={() => navigate("/login")}>
            <User size={24} />
          </button>
          <button className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" >
          {/* Sidebar */}
          <div className="w-72 h-full bg-white shadow-lg p-6 relative" style={{overflow:'auto'}}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Mobile Explore Links */}
            <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
            {renderExploreLinks(setIsMobileMenuOpen)}

            {/* Social Media Links */}
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com" className="text-gray-600 hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-black">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* Helper function to render Explore Links */
const renderExploreLinks = (closeMenu) => (
  <div className="space-y-6">
    <div>
      <h3 className="font-medium mb-2">SHOP BY COLLECTION</h3>
      <ul className="space-y-2">
        {["mild", "wild"].map((item) => (
          <li key={item}>
            <Link to={`/collection/${item}`} className="text-gray-600 hover:text-black" onClick={() => closeMenu(false)}>
              {item.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-medium mb-2">SHOP BY CATEGORY</h3>
      <ul className="space-y-2">
        {["t-shirts"].map((item) => (
          <li key={item}>
            <Link to={`/collection/${item}`} className="text-gray-600 hover:text-black" onClick={() => closeMenu(false)}>
              {item.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-medium mb-2">SUPPORT</h3>
      <ul className="space-y-2">
        {["contact", "return", "track"].map((item) => (
          <li key={item}>
            <Link to={`/${item}`} className="text-gray-600 hover:text-black" onClick={() => closeMenu(false)}>
              {item.replace("-", " ").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-medium mb-2">COMPANY</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/about" className="text-gray-600 hover:text-black" onClick={() => closeMenu(false)}>
            ABOUT US
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="font-medium mb-2">TERMS AND PRIVACY</h3>
      <ul className="space-y-2">
        {["return-policy", "refund-policy", "shipping-policy", "terms", "privacy"].map((item) => (
          <li key={item}>
            <Link to={`/${item}`} className="text-gray-600 hover:text-black" onClick={() => closeMenu(false)}>
              {item.replace("-", " ").toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Navbar;
