import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar/index.jsx';
import { ContextProvider } from './components/context/carouselContext/APIContext/index.jsx';
import { createContext } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
    </React.StrictMode>,
)
