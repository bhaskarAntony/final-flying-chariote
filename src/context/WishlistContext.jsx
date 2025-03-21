import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext(undefined);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  const addToWishlist = (product) => {
    if (!product || Object.keys(product).length === 0) {
      console.warn("Invalid product added to wishlist:", product);
      return;
    }
  
    setWishlist((currentWishlist) => {
      if (!currentWishlist.some((item) => item.id === product.id)) {
        return [...currentWishlist, product];
      }
      return currentWishlist;
    });
  };
  

  const removeFromWishlist = (productId) => {
    setWishlist(currentWishlist => 
      currentWishlist.filter(item => item.id !== productId)
    );
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      addToWishlist, 
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};