import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    // Retrieve cart data from localStorage if available
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart data with localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id && item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...currentItems, newItem];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (id, size) => {
    setItems(currentItems => currentItems.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, quantity) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const updateSize = (id, oldSize, newSize) => {
    setItems(currentItems => {
      const itemToUpdate = currentItems.find(item => item.id === id && item.size === oldSize);

      if (!itemToUpdate) return currentItems;

      const existingItemWithNewSize = currentItems.find(item => item.id === id && item.size === newSize);

      if (existingItemWithNewSize) {
        // Merge quantities if an item with the new size exists
        const updatedItems = currentItems.filter(item => !(item.id === id && item.size === oldSize));
        return updatedItems.map(item =>
          item.id === id && item.size === newSize
            ? { ...item, quantity: item.quantity + itemToUpdate.quantity }
            : item
        );
      }

      // If no item with the new size exists, just update the size
      return currentItems.map(item =>
        item.id === id && item.size === oldSize ? { ...item, size: newSize } : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, updateSize, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
