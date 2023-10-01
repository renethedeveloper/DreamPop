import React from 'react'
import "./index.css"
import CarouselContext from '../../context/carouselContext'

const Lighting = ({CarouselContext}) => {
  return (
   
    <div>
    <div className='mainProductDiv'>
      
    <div className='productTitle'>Furniture</div>
        
      <div className='mainPic'>
      <img className='image' src="../public/images/7pXvW1W.jpg" alt="redChair" />
      </div>

      <div className='specs'>
        <h2>Red Vintage Acrylic Chair</h2>
        <p>This vintage is chair is made in 1972 by Smyth and Bjorgensen. Marvel at the clean mid-century lines and red acrylic.</p><br /><br /><br /><br /> <p>Price: $$$</p>   </div>
       

      <div className='paymentOptions'><div>Payments options</div></div>
      
  
    </div >
    <div className='carousel'>
      < CarouselContext/>
      </div>
    </div>
    
  )
}

export default Lighting;
