import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import allProducts from '../data/products';

const SearchBar = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div ref={searchRef} className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center gap-2 border-b pb-4">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full focus:outline-none text-lg"
            autoFocus
          />
        </div>

        <div className="mt-4 max-h-96 overflow-y-auto">
          {searchResults.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={onClose}
              className="flex items-center gap-4 p-4 hover:bg-gray-50"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">₹{product.price}</p>
              </div>
            </Link>
          ))}
          {searchQuery && searchResults.length === 0 && (
            <p className="text-center text-gray-500 py-4">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;