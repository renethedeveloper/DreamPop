import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Products from './components/products';
import Events from './components/events';
import Footer from './components/footer';
import Logo from './components/logo';
import Lighting from './components/products/lighting';
import { useContext, createContext } from 'react';
import Carousel from './components/context/carouselContext';
import Decor from './components/products/decor';
import FAQ from './components/faq';
import CustomSourcing from './components/products/customSourcing';
import Kitchen from './components/products/kitchen';
import Carousel2 from './components/context/API2';

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
          <Route path="/faq" element={<FAQ Carousel={Carousel}  />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/lighting" element={<Lighting Carousel2={Carousel2} />} />
          <Route path="/products/decor" element={<Decor Carousel={Carousel} />} />
          <Route path="/products/kitchen" element={<Kitchen Carousel={Carousel} />} />
          <Route path="/products/customSourcing" element={<CustomSourcing/>}/> 
        
        </Routes>
        <Footer />
        
      </div>
   
  );
}

export default App;
