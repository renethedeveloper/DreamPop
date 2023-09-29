import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const NavBar = () => {
  return (
    <div className='navbar'>
     
      <Link to='/' className='link'>Home</Link>
      <Link to='/about' className='link'>About</Link>
      <div className='dropdown'>
        <button className='dropdown'>Products &#9660;</button>
        <div className='dropdown-content'>
          <Link to='/products/decor'>Decor</Link>
          <Link to='/products/lighting'>Lighting</Link>
          <Link to='/products/kitchen'>Kitchen</Link>
        </div>
      </div>
      <Link to='/'> {/* Specify the URL for the home page */}
        <img className='logo' src="public/images/OldLogo.png" alt="dreampoplogo"/>
      </Link>
      <Link to='/contact'  className ="contact"className='link'>Contact</Link>
      
      <Link to='/faq' className='link'>FAQ</Link>
      <Link to='/events' className='link'>Events</Link>
      <input className='searchBar' placeholder='Search for Anything' type='text' />
      </div>
  );
};

export default NavBar;
