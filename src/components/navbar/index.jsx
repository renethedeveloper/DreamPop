import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const NavBar = () => {
  return (
    <div>
    <div className='navbar'>
     
      <Link to='/' className='link'>Home</Link>
      <Link to='/about' className='link'>About</Link>
      <Link to ="/products">
      <div className='dropdown'>
        <button className='dropdown'>Products &#9660;</button>
        <div className='dropdown-content'>
          <Link to='/products/decor'>Decor</Link>
          <Link to='/products/lighting'>Lighting</Link>
          <Link to='/products/kitchen'>Kitchen</Link>
        </div>
      </div>
      </Link>
      
       <Link to="/"> <img className='logo' src="public/images/OldLogo.png" alt="dreampoplogo"/></Link>
      
      <Link to='/contact'  className ="contact" className='link'>Contact</Link>
      
      <Link to='/faq' className='link'>FAQ</Link>
      <Link to='/events' className='link'>Events</Link>
     
      </div>
      <div>
        <input placeholder='Search for Anything' className="searchBar" type="text" />
      </div>
      </div>
       
  );
};

export default NavBar;
