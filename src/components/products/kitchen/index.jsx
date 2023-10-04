import React, { useState, useEffect } from 'react'
import Carousel3 from '../../context/API3';
import { useContext } from 'react'
import "./index.css"
import { MyContext } from '../../context/carouselContext/APIContext';


const Kitchen = () => {
  
  
  const {selectedImage3, productsArray, setSelectedImage3} = useContext(MyContext);

  const [defaultImage, setDefaultImage] =useState("https://media.kohlsimg.com/is/image/kohls/396327_Dark_Stonewash?wid=180&hei=180&op_sharpen=1")

useEffect(()=>{
  if(selectedImage3===undefined){
  setSelectedImage3(defaultImage);
  }
},[])


  const selectedProduct = productsArray.find((product)=>product.image.url===selectedImage3)
 

  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Kitchen</div>
        
      <div className='mainPic'>
      <img className='image' src={selectedImage3} alt="mainImage" />
      </div>

      <div className='specs'>
      <h4> {selectedProduct? selectedProduct.productTitle: ""}</h4>
        <h3>{selectedProduct ? selectedProduct.productDescription : ''}</h3><br /><br /><br /><br /> <p>Price:{selectedProduct ? selectedProduct.productRegularPrice : ''} </p>   </div>
       

      <div className='paymentOptions'>Payments options</div>
      
  
    </div >
    <div className='carousel'>
      < Carousel3/>
      </div>
    </div>
    
  )
}

export default Kitchen;
