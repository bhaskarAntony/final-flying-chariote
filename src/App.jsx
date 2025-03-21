import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import OrderConfirmation from './pages/OrderConfirmation';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import ScrollToTop from './utilies/ScrollToTop';
import ReturnPolicy from './pages/ReturnPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import { ShippingPolicy } from './pages/ShippingPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection/:type" element={<Collection />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </main>
            <Footer />
            <Cart />
            <Toaster position="top-center" />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;