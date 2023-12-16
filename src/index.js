import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from './App';
import Router from './components/registracion/Router';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
      <Router/>
      <Footer/>

  </React.StrictMode>
  </BrowserRouter>
);
