import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const Cart = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, updateSize } = useCart();

  if (!isCartOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
      <div className="relative w-full max-w-md bg-white h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-medium">
              {items.length} ITEMS IN YOUR CART
            </h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <div className="flex gap-4 mt-2">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, item.size, Number(e.target.value))}
                      className="border p-1 text-sm"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <select
                      value={item.size}
                      onChange={(e) => updateSize(item.id, item.size, e.target.value)}
                      className="border p-1 text-sm"
                    >
                      {sizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">₹{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length > 0 && (
            <div className="mt-8 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">
                *SHIPPING AND EXTRA CHARGES CALCULATED AT CHECKOUT.
              </p>
              <button className="w-full bg-black text-white py-3 flex items-center justify-center gap-2">
                CHECKOUT SECURELY
                <span className="text-lg">🔒</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;