import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import counterReducer from "./Reducers/Counter";
import Sample from './Sample';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
     reducer : {
        counter: counterReducer
     }
})
root.render(   
  <Provider store={store}>
      {/* <App /> */}
     <Sample/>
  </Provider>
   
);

reportWebVitals();
