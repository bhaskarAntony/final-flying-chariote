import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './utilies/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <ScrollToTop/>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection/:type" element={<Collection />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

// import React, { useState } from 'react'

// function App() {
//   const [isTwo, setisTwo] = useState(true);
//   const [count, setCount] = useState(0)
//   const increment = () =>{
//     if(isTwo){
//       setCount(count+2);
//       setisTwo(!isTwo);
//     }else{
//       setCount(count+3);
//       setisTwo(!isTwo);
//     }
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <progress min="0" max="1000" value={count}></progress>
//       <button onClick={increment}>Click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {
//   const [isTwo, setistwo] = useState(true);
//   const [count, setCount] = useState(999);

//   const increment = () =>{
//     if(isTwo==true){
//       setCount(count+2);
//       setistwo(!isTwo)
//     }else{
//       setCount(count+3);
//       setistwo(!isTwo)
//     }
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>increment</button>
//       <progress min="0" max={1000} value={count} style={{accentColor:`${count>=1000?"red !important":"green"}`}}></progress>
//     </div>
//   )
// }

// export default App

