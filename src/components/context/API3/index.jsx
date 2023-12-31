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



const Carousel3 = ({children}) => {

    const {productsArray, setSelectedImage3} = useContext(MyContext);
    
   
   

        
   
    
    
    
    

    
   
    
    const  handleImage3 = (url) => {
    
        setSelectedImage3("http://" + url)
        console.log( url)
        }
        
    
    




const productsJsx = productsArray.map((productObject) => {

   return(<div key={productObject.id}>
    <h3 className='carouselTitle'>{productObject.name}</h3>
    <img className='carouselImage' onClick={() => handleImage3(productObject.imageUrl)} src={"http://"+productObject.imageUrl} alt={productObject.id} />

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

export default Carousel3;
