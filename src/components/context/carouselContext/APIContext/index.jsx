import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const ContextProvider = ({ children }) => {

  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage1, setSelectedImage1] = useState();
  const [selectedImage2, setSelectedImage2] = useState();
  const [selectedImage3, setSelectedImage3] = useState();
 

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://kohls.p.rapidapi.com/products/list',
        params: {
          limit: '24',
          offset: '1',
          dimensionValueID: 'AgeAppropriate:Teens'
        },
        headers: {
          'X-RapidAPI-Key': 'e3d6fa1ebcmshf7f980145487d74p1b202fjsn0eaea5ff1077',
          'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
        }
      };

      try {
        const response = await axios(options);
        console.log(response.data.payload.products);
        setProductsArray(response.data.payload.products); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 

    
  }, []); 

  return (
    <MyContext.Provider value ={{selectedImage1, setSelectedImage1, productsArray,selectedImage2, setSelectedImage2,selectedImage3, setSelectedImage3 }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
