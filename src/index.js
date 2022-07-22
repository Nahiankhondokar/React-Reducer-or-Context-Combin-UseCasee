import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CategoryContextProvider from './providers/categoryContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


