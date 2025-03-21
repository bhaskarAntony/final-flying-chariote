import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, X, Instagram, Facebook, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import SearchBar from "./SearchBar";
import logo from '../assets/logo.png';

const Navbar = () => {
  const { items, setIsCartOpen } = useCart();
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white z-50 px-6 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} width={100} alt="BBB Logo" />
        </Link>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)}>
            <Search size={24} />
          </button>
          <Link to='/wishlist' >
            <Heart size={24} />
          </Link>
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

      {/* Search Bar */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Off-Canvas Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="w-72 h-full bg-white shadow-lg p-6 relative" style={{overflow:'auto'}}>
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            {renderExploreLinks(setIsMobileMenuOpen)}

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
        {["contact"].map((item) => (
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
