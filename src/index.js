import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './components/Context/ThemeContext'
import BtnToggle from './components/btnToggle/BtnToggle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 

  <div className="App">

  <React.StrictMode>
<ThemeContextProvider>
  <BrowserRouter>
    <App />
    <BtnToggle/>
  </BrowserRouter>
</ThemeContextProvider>
  </React.StrictMode>
  </div>
 
 
);