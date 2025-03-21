import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import allProducts from "../data/products";
import { useWishlist } from "../context/WishlistContext";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });

  useEffect(() => {
    const product = allProducts.find((item) => item.id == id);
    if (product) {
      setCurrentProduct(product);
      setSelectedImage(product.images?.[0] || "default.jpg");
    }
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      {currentProduct ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Image with Zoom Effect */}
          <div className="space-y-4">
            <div
              className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoomStyle({ display: "none" })}
            >
              <img
                src={selectedImage}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
              />
              {/* Zoom Effect */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover transform scale-150"
                style={{
                  ...zoomStyle,
                  width: "200%",
                  height: "200%",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4">
              {currentProduct.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-cover cursor-pointer border ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <h1 className="text-2xl font-medium mb-2">{currentProduct.name}</h1>
            <p className="text-xl">₹{currentProduct.price}</p>
            <p className="text-gray-600">{currentProduct.description}</p>

            {/* Size Selection */}
            <div>
              <span className="text-sm font-medium">SELECT A SIZE</span>
              <div className="grid grid-cols-6 gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() =>
                selectedSize &&
                addToCart({
                  id: currentProduct.id,
                  name: currentProduct.name,
                  price: currentProduct.price,
                  size: selectedSize,
                  quantity: 1,
                  image: selectedImage,
                })
              }
              disabled={!selectedSize}
              className={`w-full py-4 text-center ${
                selectedSize
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {selectedSize ? "ADD TO CART" : "SELECT A SIZE"}
            </button>

            {/* Add to Wishlist Button (Fixed onClick issue) */}
            <button
              className="bg-black text-white w-full py-4 text-center"
              onClick={() => addToWishlist(currentProduct)}
            >
              Add to Wishlist
            </button>

            {/* Product Details */}
            <div className="space-y-4 border-t pt-8">
              <h4>Sizes Information</h4>
              <hr />
              {currentProduct?.sizesInfo?.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t pt-8">
              <h4>About Product</h4>
              <hr />
              {currentProduct?.information?.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductDetail;
