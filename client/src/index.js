import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import "assets/sass/material-dashboard-pro-react.css";

import configureStore from "./store"
import MyApp from './MyApp'

import Axios from 'axios';
// Axios.defaults.baseURL = 'https://mickey-portfolio.herokuapp.com/'; // server
Axios.defaults.baseURL = 'http://localhost:5000/'; // test Local

ReactDOM.render(
  <Provider store={configureStore}>
    {/* <AppHooks /> */}
    <MyApp />
  </Provider>
, document.getElementById('root'));

