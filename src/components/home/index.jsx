import React from 'react'
import "./index.css"
import Decor from '../products/decor';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        
        <img className='mainImage' src="public/images/showRoomMain.png" alt="showroom" />
        <div className='gallery'>
        <img id='galleryImage' src="public/images/flamingoMirror.jpeg" alt="flamingoMirror" />
        <img id='galleryImage' src="public/images/tulipLampsGold.jpeg" alt="tulipLamp" />
        <img id='galleryImage' src="public/images/leatherChair.jpeg" alt="leatherChair" />
        </div>
        
      
    </div>
  )
}

export default Home;
