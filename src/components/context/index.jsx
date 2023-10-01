import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://ikea-api.p.rapidapi.com/keywordSearch',
        params: {
          keyword: 'chair',
          countryCode: 'us',
          languageCode: 'en',
        },
        headers: {
          'X-RapidAPI-Key': 'e3d6fa1ebcmshf7f980145487d74p1b202fjsn0eaea5ff1077',
          'X-RapidAPI-Host': 'ikea-api.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setApiData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <MyContext.Provider value={apiData}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
