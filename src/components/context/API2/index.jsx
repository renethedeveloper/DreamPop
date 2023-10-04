import React, { useContext, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./index.css"
import { MyContext } from '../carouselContext/APIContext';


const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
};

// const items = [
//   <img  id="thumbnail" key="image1" src="/images/7pXvW1W.jpg" alt="image" />,
//   <img id="thumbnail"  key="image2" src="/public/images/leatherChair.jpeg" alt="leatherChair" />,
//   <img id="thumbnail"  key="image3" src="/public/images/tableSet.jpeg" alt="table" />,
//   <img id="thumbnail"  key="image4" src="/public/images/glassSideTable.jpeg" alt="sideTable" />,
//   <img id="thumbnail"  key="image5" src="/public/images/glassTable.jpeg" alt="glassTable" />,
//   <img id="thumbnail" key="image6" src="/public/images/pinkChair.jpeg" alt="pinkChair" />,
//   <img id="thumbnail" key="image7" src="/public/images/MirrorTowers.jpeg" alt="mirrorTowers" />,
// ];



const Carousel2 = ({children}) => {

    const {productsArray, setSelectedImage2} = useContext(MyContext);

        
   
    
    
    
    
    
    const  handleImage = (url) => {
    
      setSelectedImage2(url)
      console.log(url)
      }
    
   
    
    




const productsJsx = productsArray.map((productObject) => {

   return(<div key={productObject.webID}>
    <h3 className='productTitle'>{productObject.productTitle}</h3>
    <img onClick={() => handleImage(productObject.image.url)} src={productObject.image.url} alt={productObject.webID} />

  </div>) 
})
  
  return (
    <div className='carousel'>
      <AliceCarousel
        mouseTracking
        items={productsJsx}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
}

export default Carousel2;
