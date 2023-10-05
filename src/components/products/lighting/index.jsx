import React, { useState, useEffect, useContext } from 'react'
import "./index.css"
import { MyContext } from '../../context/carouselContext/APIContext'
import Carousel2 from '../../context/API2'

const Lighting = () => {
  
  
  const {selectedImage2, productsArray, setSelectedImage2} = useContext(MyContext);

  const [defaultImage, setDefaultImage2] =useState("https://media.kohlsimg.com/is/image/kohls/396327_Dark_Stonewash?wid=180&hei=180&op_sharpen=1")

useEffect(()=>{
  if(selectedImage2===undefined){
  setSelectedImage2(defaultImage);
  }
},[])


  const selectedProduct = productsArray.find((product)=>product.imageUrl===selectedImage2)
 

  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Lighting</div>
        
      <div className='mainPic'>
      <img className='image' src={selectedImage2} alt="mainImage" />
      </div>

      <div className='specs'>

      <h4 className='productTitle'> {selectedProduct? selectedProduct.productTitle: ""}</h4>
        <h3 className='productDecription'>{selectedProduct ? selectedProduct.productDescription : ''}</h3><br /><br /><br /><br /> <p className='price'>Price:{selectedProduct ? selectedProduct.productRegularPrice : ''} </p>   </div>
       

      <div className='paymentOptions'>Payments options</div>
      
  
    </div >
    <div className='carousel'>
      < Carousel2/>
      </div>
    </div>
    
  )
}

export default Lighting;
