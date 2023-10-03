import React, { useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const ContextProvider = ({ children }) => {

  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
 

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
    <MyContext.Provider value ={{selectedImage, setSelectedImage, productsArray }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
