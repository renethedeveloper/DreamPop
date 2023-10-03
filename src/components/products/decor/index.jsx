import React, { createContext, useState } from 'react'
import CarouselContext from '../../context/carouselContext'
import { useContext } from 'react'
import { MyContext } from '../../context/carouselContext/APIContext'
import "./index.css"


const Decor = () => {

const {selectedImage, productsArray} = useContext(MyContext);





const selectedProduct = productsArray.find((product)=>product.image.url===selectedImage)

  
  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Decor</div>
        
      <div className='mainPic'>
      
        
      <img className="image" src={selectedImage} alt="mainImage" />
      </div>

      <div className='specs'>
        <h2> {selectedProduct? selectedProduct.productTitle: ""}</h2>
        <p>{selectedProduct ? selectedProduct.productDescription : ''}</p><br /><br /><br /><br /> <p>Price:{selectedProduct ? selectedProduct.productRegularPrice : ''} </p>   </div>
       

      <div className='paymentOptions'><div>Payments options</div></div>
      
  
    </div >
    <div className='carousel'>
      < CarouselContext/>
      </div>
    </div>
    
  )
}

export default Decor;
