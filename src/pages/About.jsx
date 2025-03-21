import React from 'react';

const About = () => {
  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">About Us</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to Flying chariot, where fashion meets sustainability. We're more than just a clothing brand;
          we're a movement towards conscious fashion that doesn't compromise on style or quality.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-6">Our Story</h2>
        <p className="mb-6">
          Founded in 2024, Flying chariot emerged from a simple yet powerful idea: that fashion can be both
          beautiful and responsible. Our journey began with a commitment to creating clothing that
          not only looks good but feels good - both to wear and to buy, knowing that it's been
          produced with respect for our planet.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-6">Our Mission</h2>
        <p className="mb-6">
          We're on a mission to revolutionize the fashion industry by:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Using sustainable materials and eco-friendly production processes</li>
          <li>Creating timeless designs that transcend seasonal trends</li>
          <li>Ensuring fair labor practices throughout our supply chain</li>
          <li>Minimizing our environmental impact at every step</li>
        </ul>

        <h2 className="text-2xl font-medium mt-12 mb-6">Our Products</h2>
        <p className="mb-6">
          Every Flying chariot product is crafted with attention to detail and commitment to quality. We use:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>100% organic cotton</li>
          <li>Eco-friendly dyes and prints</li>
          <li>Sustainable packaging materials</li>
          <li>Local craftsmanship where possible</li>
        </ul>

        <h2 className="text-2xl font-medium mt-12 mb-6">Our Commitment to Sustainability</h2>
        <p className="mb-6">
          Sustainability isn't just a buzzword for us - it's at the core of everything we do. From
          our choice of materials to our manufacturing processes, we're constantly looking for ways
          to reduce our environmental impact while maintaining the highest quality standards.
        </p>

        <h2 className="text-2xl font-medium mt-12 mb-6">Join Our Movement</h2>
        <p className="mb-6">
          When you choose Flying chariot, you're not just buying clothing - you're joining a community of
          conscious consumers who believe in the power of sustainable fashion. Together, we can make
          a difference, one garment at a time.
        </p>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Contact Us</h3>
          <p className="mb-2">Email: support@Flyingchariot.co.in</p>
          <p className="mb-2">Phone: +91 9353131613</p>
          <p>Address: ground floor, Jayanagar east end, Flying chariot, Corporation Colony, Bengaluru, Karnataka 560069</p>
        </div>
      </div>
    </div>
  );
};

export default About;