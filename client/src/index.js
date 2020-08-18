import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import AppHooks from './AppHooks'

import { Provider } from 'react-redux'
import rootReducer from './store/reducers'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Axios from 'axios';

import reduxThunk from 'redux-thunk';

Axios.defaults.baseURL = 'https://mickey-portfolio.herokuapp.com/';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state: ', store.getState())
  console.log('action: ', action)
  result = next(action)
  console.log('next state: ', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger, reduxThunk)
));

// store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
<Provider store={store}>
  <AppHooks />
</Provider>
, document.getElementById('root'));

