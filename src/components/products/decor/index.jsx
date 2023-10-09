import React, { createContext, useState, useEffect } from 'react'
import Carousel from '../../context/carouselContext'
import { useContext } from 'react'
import { MyContext } from '../../context/carouselContext/APIContext'
import "./index.css"

const Decor = () => {
  const { selectedImage1, productsArray, setSelectedImage1 } = useContext(MyContext);
  const [defaultImage, setDefaultImage1] = useState("https://media.kohlsimg.com/is/image/kohls/396327_Dark_Stonewash?wid=180&hei=180&op_sharpen=1");

  useEffect(() => {
    if (selectedImage1 === undefined) {
      
      setSelectedImage1(defaultImage);
    }
  }, [defaultImage, selectedImage1, setSelectedImage1]);

  const selectedProduct = productsArray.find((product) => product.imageUrl === selectedImage1);

  console.log(selectedProduct);


 

  return (
    <div>
      <div className='mainProductDiv'>
        <div className='Title'>Decor</div>
        <div className='mainPic'>
          <img className="image" src={selectedImage1} alt="mainImage" />
        </div>
        <div className='specs'>
          <h4 className='productTitle'> {selectedProduct ? selectedProduct.name : "Product Name Not Found"}</h4>
          <p className='productDescription'>{selectedProduct ? selectedProduct.description : 'Product Description Not Found'}</p>
          <p className='price'>Price: {selectedProduct ? selectedProduct.price : 'Price Not Found'}</p>
        </div>
        <div className='paymentOptions'>Payments options</div>
      </div>
      <div className='carousel'>
        <Carousel />
      </div>
    </div>
  )
}

export default Decor;
