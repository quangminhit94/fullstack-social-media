import React, { useState, useReducer } from 'react'

import * as Reducer from '../store/hooks_state/user_input_hooks_reducer'
import * as ACTIONS from '../store/actions/actions'

const HooksForm = () => {
  const [valueChange, setValueChange] = useState('')
  const [valueSubmit, setValueSubmit] = useState('')

  const [userState, userDispatch] = useReducer(Reducer.UserHooksReducer, Reducer.initialState)

  const handleUseStateChange = (event) => {
    setValueChange(event.target.value)
  }

  const handleUseStateSubmit = (event) => {
    event.preventDefault()
    setValueSubmit(event.target.useState.value)
  }

  const handleUseReducerChange = (event) => {
    userDispatch(ACTIONS.userInputChange(event.target.value))
  }

  const handleUseReducerSubmit = (event) => {
    event.preventDefault()
    userDispatch(ACTIONS.userInputSubmit(event.target.useReducer.value))
  }

  return (
    <div>

      <table 
        border="1" 
        style={{
          borderCollapse: "collapse"
        }}>
        <caption><h3>React useState:</h3></caption>
        <thead>
          <tr>
            <th>Demo React useState:</th>
            <th>Change Result:</th>
            <th>Submit Result:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form onSubmit={handleUseStateSubmit}>
                <label htmlFor="useState">React useState:</label><br/>
                <input type="text" name="useState" id="useState" onChange={handleUseStateChange} /><br/>
                <button type="submit">Submit</button>
              </form>
            </td>
            <td>{valueChange ? valueChange : 'no change value'}</td>
            <td>{valueSubmit ? valueSubmit : 'no submit value'}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      
      <table 
        border="1" 
        style={{
          borderCollapse: "collapse"
        }}>
        <caption><h3>React useReducer:</h3></caption>
        <thead>
          <tr>
            <th>Demo React useReducer:</th>
            <th>Change Result:</th>
            <th>Submit Result:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 
              <form onSubmit={handleUseReducerSubmit}>
                <label htmlFor="useReducer">React useReducer:</label><br/>
                <input type="text" name="useReducer" id="useReducer" onChange={handleUseReducerChange} /><br/>
                <button type="submit">Submit</button>
              </form>
            </td>
            <td>{userState.user_text_change ? userState.user_text_change : 'no change value'}</td>
            <td>{userState.user_text_submit ? userState.user_text_submit : 'no submit value'}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default HooksForm
