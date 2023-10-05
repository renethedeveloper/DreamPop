import React, { useEffect, useState, createContext } from 'react';
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
        url: 'https://asos2.p.rapidapi.com/products/v2/list',
        params: {
          store: 'US',
          offset: '0',
          categoryId: '4209',
          limit: '48',
          country: 'US',
          sort: 'freshness',
          currency: 'USD',
          sizeSchema: 'US',
          lang: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': 'e3d6fa1ebcmshf7f980145487d74p1b202fjsn0eaea5ff1077',
          'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProductsArray(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <MyContext.Provider
      value={{
        selectedImage1,
        setSelectedImage1,
        productsArray,
        selectedImage2,
        setSelectedImage2,
        selectedImage3,
        setSelectedImage3,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
