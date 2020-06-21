import React, { useState, useReducer } from 'react'
import Axios from 'axios'
import Routes from './Routes'
import Context from './utils/context'

import * as Reducer from './store/hooks_state/hooks_reducer'
import * as UserInputReducer from './store/hooks_state/user_input_hooks_reducer'
import * as ACTIONS from './store/actions/actions'

const AppHooks = () => {
  const [globalState, setGlobalState] = useState(0)

  const [stateGlobalContext, dispatchGlobalContext] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  const [stateUser, dispatchUser] = useReducer(UserInputReducer.UserHooksReducer, UserInputReducer.initialState)

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

  const handleUseContextChange = (event) => {
    dispatchUser(ACTIONS.userInputChange(event.target.value))
  }

  const handleUseContextSubmit = (event) => {
    event.preventDefault()
    // event.persist() will help passing data from hooks form to parent component
    event.persist()
    dispatchUser(ACTIONS.userInputSubmit(event.target.useContext.value))
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
          dispatchContextFalse: () => handleContextDispatchFalse(),


          userTextContextChange: stateUser.user_text_change,
          userTextContextSubmit: stateUser.user_text_submit,
          useHandleContextChange: (event) => handleUseContextChange(event),
          useHandleContextSubmit: (event) => handleUseContextSubmit(event)
        }}>

        <Routes/>
      </Context.Provider>
    </div>
  )
}

export default AppHooks;