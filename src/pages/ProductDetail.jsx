import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import allProducts from '../data/products';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});

  // Find the product from the products array (you'll need to move this to a shared location)


  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        size: selectedSize,
        quantity: 1,
        image: currentProduct.images[0]
      });
    }
  };

  useEffect(()=>{
    setCurrentProduct(allProducts.find((item)=>item.id == id));
    console.log(allProducts.find((item)=>item.id == id));
  })

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100">
            {/* <img
              src={currentProduct?.images[0]}
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-medium mb-2">{currentProduct.name}</h1>
            <p className="text-xl">₹{currentProduct.price}</p>
          </div>

          <p className="text-gray-600">{currentProduct.description}</p>
          {/* <div className="grid grid:cols-6 md:grid-cols-2">
          <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100">
            <img
              src={currentProduct?.images[1]}
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100">
            <img
              src={currentProduct?.images[1]}
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          </div> */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">SELECT A SIZE</span>
              {/* <button className="text-sm underline">Size & Fit Guide</button> */}
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`w-full py-4 text-center ${
              selectedSize
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {selectedSize ? 'ADD TO CART' : 'SELECT A SIZE'}
          </button>
          <div className="space-y-4 border-t pt-8">
            <h4>Sizes Information</h4>
            <hr />
           {
            currentProduct?.sizesInfo?.map((item, index)=>(
              <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span>{item}</span>
            </div>
            ))
           }
            
          </div>

          <div className="space-y-4 border-t pt-8">
            <h4>About Product</h4>
          <hr />

           {
            currentProduct?.information?.map((item, index)=>(
              <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span>{item}</span>
            </div>
            ))
           }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;