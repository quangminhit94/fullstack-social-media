import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import "assets/sass/material-dashboard-pro-react.css";

import configureStore from "./store"
import MyApp from './MyApp'

import Axios from 'axios';

Axios.defaults.baseURL = 'https://mickey-portfolio.herokuapp.com/';
// if (process.env.NODE_ENV === 'test') config = configuration.test;
// if (process.env.NODE_ENV === 'development') Axios.defaults.baseURL = 'http://localhost:5000/';
// if (process.env.NODE_ENV === 'production') Axios.defaults.baseURL = 'https://mickey-portfolio.herokuapp.com/'; // server

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      {/* <AppHooks /> */}
      <MyApp />
    </Provider>
  </React.StrictMode>
, document.getElementById('root'));

