import React, { useState } from 'react'
import "./index.css"
import CarouselContext from '../../context/carouselContext'
import { useContext } from 'react'
import { MyContext } from '../../context/carouselContext/APIContext'

const Lighting = () => {
  
  
  const {selectedImage, setSelectedImage} = useContext(MyContext);
 

  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Lighting</div>
        
      <div className='mainPic'>
      <img className='image' src={selectedImage} alt="mainImage" />
      </div>

      <div className='specs'>
        <h2>standIn</h2>

        <p>The decription should go here.</p><br /><br /><br /><br /> <p>Price: $$$</p>   </div>
       

      <div className='paymentOptions'><div>Payments options</div></div>
      
  
    </div >
    <div className='carousel'>
      < CarouselContext/>
      </div>
    </div>
    
  )
}

export default Lighting;
