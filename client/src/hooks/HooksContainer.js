import React, { useState, useEffect, useReducer, useContext } from 'react'
import * as Reducer from 'store/hooks_reducer/hooks_reducer'
import * as ACTIONS from 'store/actions/actions'

import Context from 'utils/context/context'

const HooksContainer = () => {

  const [stateValue, setValue] = useState(0)

  const [useEffectValue, setUseEffectValue] = useState(null)

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const context = useContext(Context)

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
      <p>React Hooks</p>

      <table 
        border="1" 
        style={{
          borderCollapse: "collapse"
        }}>
        <thead>
          <tr>
            <th>Example Name</th>
            <th>Demo</th>
            <th>Result</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Name of example</th>
            <th>Program</th>
            <th>Results of program</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>1/ useState() demo</td>
            <td>
              <button onClick={ () => incrementValue( ) }>Increment local state</button>
              &ensp;
              <button onClick={ () => decrementValue( ) }>Decrement local state</button>
            </td>
            <td>
              <p>Local State: <code>{stateValue}</code></p>
            </td>
          </tr>
          <tr>
            <td>2/ useEffect() demo</td>
            <td><button onClick={ () => changeUseEffectValue( ) }>Change useEffectValue</button></td>
            <td>
              { useEffectValue ? <p>{ useEffectValue }</p> : <p>No value</p>}
            </td>
          </tr>
          <tr>
            <td>3/ useReducer() demo</td>
            <td>
              <button onClick={ () => handleDispatchTrue( ) }>Handle dispatch True</button>
              &ensp;
              <button onClick={ () => handleDispatchFalse( ) }>Handle dispatch False</button>
            </td>
            <td>
              { state.is_authenticated ? <p>State is_authenticated = true</p> : <p>State is_authenticated = false</p>}
            </td>
          </tr>
          <tr>
            <td>4/ useContext() demo</td>
            <td>
              <button onClick={ () => context.dispatchContextTrue( ) }>Dispatch Context True</button>
              &ensp;
              <button onClick={ () => context.dispatchContextFalse( ) }>Dispatch Context False</button>
            </td>
            <td>
              <p>{ context.reducerGlobalState 
                ? <code>is_authenticated is <b>true</b> by useReducer via Context.Provider</code> 
                : <code>is_authenticated is <b>false</b> by useReducer via Context.Provider</code>
              }
              </p>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default HooksContainer;