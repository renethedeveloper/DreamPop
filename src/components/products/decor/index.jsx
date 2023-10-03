import React, { createContext, useState } from 'react'
import CarouselContext from '../../context/carouselContext'
import { useContext } from 'react'
import { MyContext } from '../../context/carouselContext/APIContext'

const Decor = () => {

const {selectedImage, setSelectedImage} = useContext(MyContext);


  
  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Decor</div>
        
      <div className='mainPic'>
      
        
      <img className="mainImage" src={selectedImage} alt="mainImage" />
      </div>

      <div className='specs'>
        <h2> Title of the Image</h2>
        <p>The description should go here.</p><br /><br /><br /><br /> <p>Price: $$$</p>   </div>
       

      <div className='paymentOptions'><div>Payments options</div></div>
      
  
    </div >
    <div className='carousel'>
      < CarouselContext/>
      </div>
    </div>
    
  )
}

export default Decor;
