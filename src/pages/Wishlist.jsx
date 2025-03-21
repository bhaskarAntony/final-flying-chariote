import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingBag } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  console.log(wishlist);
  

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: 'M', // Default size
      quantity: 1,
      image: ""
    });
  };

  if (wishlist.length === 0) {
    return (
      <div className="pt-24 px-6 text-center">
        <Heart size={48} className="mx-auto mb-4 text-gray-300" />
        <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-8">Add items you love to your wishlist. Review them anytime and easily move them to the cart.</p>
        <Link 
          to="/collection/all" 
          className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-medium mb-8">My Wishlist ({wishlist.length})</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart size={20} className="fill-black" />
              </button>
            </div>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <p className="text-sm">₹{product.price}</p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full mt-4 py-2 flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-900 transition-colors"
            >
              <ShoppingBag size={16} />
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;