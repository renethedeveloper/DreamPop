import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import FAQ from './components/faq';
import Products from './components/products';
import Events from './components/events';
import Footer from './components/footer';
import Logo from './components/logo';
import Lighting from './components/products/lighting';

function App() {
  return (
    
      <div>
         <Logo/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/lighting" element={<Lighting />} />
        
        </Routes>
        <Footer />
        
      </div>
   
  );
}

export default App;
