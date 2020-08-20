import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import configureStore from "./store"
import AppHooks from './AppHooks'

import Axios from 'axios';
Axios.defaults.baseURL = 'https://mickey-portfolio.herokuapp.com/';

ReactDOM.render(
  <Provider store={configureStore}>
    <AppHooks />
  </Provider>
, document.getElementById('root'));

