import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Plus, Search, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import allProducts from '../data/products';
import SearchBar from '../components/SearchBar';

const categories = [ 'T-SHIRTS'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const products = [
  {
      id:1,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+RED+red+240g/FYING.png+(4).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+RED+red+240g/IMG_6811+(2).PNG'],
      name:'T-SHIRT TOXICITY RED 240g',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:2,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+GREEN+240g/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+GREEN+240g/IMG_6831+(2).PNG'],
      name:'T-SHIRT TOXICITY GREEN 240g',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:3,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/IMG_6796+(2).PNG', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png'],
      name:'T-SHIRT TOXICITY CREAM 240g',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:4,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png'],
      name:'T-SHIRT TOXICITY BLACK 240G',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:5,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SOULBOUND+RED+240g/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SOULBOUND+RED+240g/IMG_6843+(2).PNG'],
      name:'T-SHIRT SOULBOUND RED 240g',
      price:'799',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:6,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SC+GREEN+250g/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+SC+GREEN+250g/IMG_6823+(1).WEBP'],
      name:'T-SHIRT SC GREEN 250g',
      price:'799',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:7,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+FC+BLACK+250g/FYING+(6).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+FC+BLACK+250g/IMG_6843+(2).PNG'],
      name:'T-SHIRT FC BLACK 250g',
      price:'799',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:8,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+RED+240g/FYING.png+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+RED+240g/IMG_6811+(3).PNG'],
      name:'T-SHIRT CREATOR RED 240g',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  // {
  //     images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+TOXICITY+CREAM+240g/pixelcut-export 5 (1).png'],
  //     name:'T-SHIRT CREATOR BLACK 240 g',
  //     price:'699',
  //     description:`
  //     Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
  //     We care about the environment: each print is made using eco-friendly materials and technologies.
  //     The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
  //     `,
  //     sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
  //     information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  // },
  {
      id:10,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+CREAM+240g/IMG_6796+(2).PNG', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+CREAM+240g/pixelcut-export+4+(1).png'],
      name:'T-SHIRT CREATOR CREAM 240g',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  },
  {
      id:11,
      images:['https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+GREEN/FYING+(5).png', 'https://flyingchoriate.s3.ap-southeast-1.amazonaws.com/t-shirts/T-SHIRT+CREATOR+GREEN/IMG_6831+(2).PNG'],
      name:'T-SHIRT CREATOR GREEN',
      price:'699',
      description:`
      Our T-shirts are perfect for any style—both formal and casual—and look great on everyone.
      We care about the environment: each print is made using eco-friendly materials and technologies.
      The T-shirt retains its shape and vibrancy even after multiple washes, thanks to the 240GSM fabric density.
      `,
      sizesInfo:['Male is 193 cm and wears size L', 'Female is 164 cm and wears size S'],
      information:['100% cotton', '240GSM fabric', 'Boxy and slightly cropped cut', 'Wash at 30º C', '3D print', 'Print made with eco-friendly Italian ink.']

  }
]


const Collection = () => {
  const filterRef = useRef(null);
  const { type } = useParams();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(type?.toUpperCase() || 'ALL');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
 const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    sizes: []
  });


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        const filterButton = document.querySelector('[data-filter-button]');
        if (!filterButton?.contains(event.target)) {
          setShowFilter(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const currentValues = prev[type];
      return {
        ...prev,
        [type]: currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      sizes: []
    });
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by selected category
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(product => 
        product.category === selectedCategory || product.collection === selectedCategory
      );
    }

    // Apply additional filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category) || filters.categories.includes(product.collection)
      );
    }

    return filtered;
  }, [selectedCategory, filters]);

  const handleAddToCart = (product, size) => {
    console.log(product);
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size,
      quantity: 1,
      image: product.images?.[0] || "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg"
    });
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  return (
    <div className="pt-24">
      <div className="flex">
        {/* Filter Sidebar */}
        <div 
          ref={filterRef}
          className={`fixed inset-y-0 right-0 w-[400px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            showFilter ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col">
            <div className="px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-lg">Filter</h2>
              <button onClick={() => setShowFilter(false)}>
                <X size={20}/>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="mb-8">
                <h3 className="text-sm mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.filter(cat => cat !== 'ALL').map(category => (
                    <label key={category} className="flex items-center gap-3">
                      
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleFilterChange('categories', category)}
                        className="w-4 h-4 border-gray-300 rounded"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm mb-4">Sizes</h3>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleFilterChange('sizes', size)}
                      className={`py-2 text-sm border ${
                        filters.sizes.includes(size)
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t px-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={clearFilters}
                  className="py-3 text-sm border border-gray-300 hover:border-black transition-colors"
                >
                  CLEAR SELECTION
                </button>
                <button
                  onClick={() => setShowFilter(false)}
                  className="py-3 text-sm bg-black text-white hover:bg-gray-900 transition-colors"
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6">
          <div className="flex justify-between items-center mb-8">
            {/* <h1 className="text-2xl font-light">
              {selectedCategory}
              <sup className="ml-1 text-sm">{filteredProducts.length}</sup>
            </h1> */}
             <button onClick={() => setIsSearchOpen(true)}>
            <Search size={24} />
          </button>
            <button 
              data-filter-button
              className="flex items-center gap-2"
              onClick={() => setShowFilter(true)}
            >
              <span>FILTER</span>
              <Filter size={20} />
            </button>
          </div>

          {/* <div className="overflow-x-auto">
            <div className="flex gap-8 mb-12 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm transition-colors duration-200 ${
                    category === selectedCategory
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product) => (
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
                    onClick={() => {
                      setSelectedProduct(selectedProduct === product.id ? null : product.id);
                      setSelectedSize(null);
                    }}
                    className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                  {selectedProduct === product.id && (
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                      <div className="grid grid-cols-6 gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleAddToCart(product, size)}
                            className={`text-sm py-1 border ${
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
                  )}
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-sm font-medium mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-sm">₹{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

    </div>
  );
};

export default Collection;