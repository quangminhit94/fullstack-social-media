import { createStore, compose, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import rootReducer from './store/reducers'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

// const configureStore = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(logger, reduxThunk)
// ));

const configureStore = createStore(rootReducer, composeEnhancer(applyMiddleware(logger, reduxThunk)));

// store.subscribe(() => saveToLocalStorage(store.getState()))

export default configureStore