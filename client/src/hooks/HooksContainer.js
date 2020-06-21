import React, { useState, useEffect, useReducer, useCallback } from 'react'
import * as Reducer from '../store/hooks_state/hooks_reducer'
import * as ACTIONS from '../store/actions/actions'

const HooksContainer = () => {

  const [stateValue, setValue] = useState(0)

  const [useEffectValue, setUseEffectValue] = useState(null)

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  useEffect(() => {
    setTimeout( () => {
      setUseEffectValue("useEffect worked!")
    }, 1000)
    return () => {
      
    }
  }, [stateValue, state])

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue - 1)
  }

  const changeUseEffectValue = () => {
    setUseEffectValue('some value is set by using setUseEffectValue')
  }

  const handleDispatchTrue = () => {
    // dispatch(ACTION_TYPES.SUCCESS)
    // dispatch(type: "SUCCESS")
    dispatch(ACTIONS.loginSuccess())
  }

  const handleDispatchFalse = () => {
    // dispatch(ACTION_TYPES.FAILURE)
    // dispatch(type: "FAILURE")
    dispatch(ACTIONS.loginFailure())
  }
  
  return (
    <div>
      React Hooks
      <br/>
      <button onClick={ () => incrementValue( ) }>Increment local state</button>
      &ensp;
      <button onClick={ () => decrementValue( ) }>Decrement local state</button>
      &ensp;
      <button onClick={ () => changeUseEffectValue( ) }>Change useEffectValue</button>
      &ensp;
      <button onClick={ () => handleDispatchTrue( ) }>Handle dispatch True</button>
      &ensp;
      <button onClick={ () => handleDispatchFalse( ) }>Handle dispatch False</button>
      <div>
        { useEffectValue ? <p>{ useEffectValue }</p> : <p>No value</p>}
      </div>
      <div>
        { state.is_authenticated ? <p>State is_authenticated = true</p> : <p>State is_authenticated = false</p>}
      </div>
      <div>
        <p>Local State: <code>{stateValue}</code></p>
      </div>

    </div>
  )
}

export default HooksContainer;