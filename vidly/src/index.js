import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(process.env) ; 

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



reportWebVitals();
