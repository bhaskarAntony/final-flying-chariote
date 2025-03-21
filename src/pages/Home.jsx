import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img3.jpg'

const Home = () => {
  return (
    <div className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        {/* MILD Section */}
        <Link to="/collection/mild" className="relative group">
          <div className="h-[90vh] bg-gray-100 overflow-hidden">
            <img 
              src={image1} 
              alt="Mild Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-light mb-2">MILD</h2>
            <div className="flex items-center gap-2 text-sm">
              <span>View Collection</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>

        {/* WILD Section */}
        <Link to="/collection/wild" className="relative group">
          <div className="h-[90vh] bg-gray-100 overflow-hidden">
            <img 
              src={image2}
              alt="Wild Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-light mb-2">WILD</h2>
            <div className="flex items-center gap-2 text-sm">
              <span>View Collection</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;