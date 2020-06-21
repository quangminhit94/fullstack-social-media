import React, { useState, useReducer } from 'react'
import Axios from 'axios'
import Routes from './Routes'
import Context from './utils/context'

import * as Reducer from './store/hooks_state/hooks_reducer'
import * as ACTIONS from './store/actions/actions'

const AppHooks = () => {
  const [globalState, setGlobalState] = useState(0)

  const [stateGlobalContext, dispatchGlobalContext] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  const incrementGlobalState = () => {
    setGlobalState(globalState + 1)
  }

  const decrementGlobalState = () => {
    setGlobalState(globalState - 1)
  }
  
  const handleContextDispatchTrue = () => {
    dispatchGlobalContext(ACTIONS.loginSuccess())
  }

  const handleContextDispatchFalse = () => {
    dispatchGlobalContext(ACTIONS.loginFailure())
  }
  
  return (
    <div>
      React
      <Context.Provider 
        value={{
          globalStateValue: globalState,
          plusGlobalValue: () => incrementGlobalState(),
          minusGlobalValue: () => decrementGlobalState(),
          reducerGlobalState: stateGlobalContext.is_authenticated,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse()
        }}>

        <Routes/>
      </Context.Provider>
    </div>
  )
}

export default AppHooks;