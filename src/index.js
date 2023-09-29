import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from "./Reducers/Users"
const root = ReactDOM.createRoot(document.getElementById('root'));
 const store = configureStore({
      reducer: {
          users: userReducer
      }
 })
root.render(   
  
      <Provider store={store}>

          <App/>
      </Provider>
   
);

reportWebVitals();
