import React, { useState, useEffect } from 'react'
import CarouselContext from '../../context/carouselContext'
import { useContext } from 'react'
import { MyContext } from '../../context/carouselContext/APIContext'

const Kitchen = () => {
  
  
  const {selectedImage, productsArray, setSelectedImage} = useContext(MyContext);

  const [defaultImage, setDefaultImage] =useState("https://media.kohlsimg.com/is/image/kohls/396327_Dark_Stonewash?wid=180&hei=180&op_sharpen=1")

useEffect(()=>{
  setSelectedImage(defaultImage);
},[])


  const selectedProduct = productsArray.find((product)=>product.image.url===selectedImage)
 

  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='Title'>Kitchen</div>
        
      <div className='mainPic'>
      <img className='image' src={selectedImage} alt="mainImage" />
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

export default Kitchen;
