import React, { useReducer, useState } from 'react'
import * as FormReducer from 'store/reducers/user_reducer';
import * as ACTIONS from 'store/actions/actions';
import { connect } from 'react-redux'

const Component1 = (props) => {
  const [stateForm, setStateForm] = useState(0)
  const [stateFormReducer, dispatchFormReducer] = useReducer(FormReducer.UserReducer, FormReducer.initialState)

  const handleChange = (event) => (
    setStateForm({ value: event.target.value })
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    event.persist();
    // dispatchFormReducer(ACTIONS.userInput(event.target.name.value))
    props.input_action_creator(event.target.name.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Input </label>
        <input id="name" onChange={handleChange} type="text" />
        <button type="submit" onSubmit={() => handleSubmit}> Submit </button>
      </form>
      <br />
      <h3>React State:</h3>
      <p>{stateForm.value}</p>
      <br />
      <h3>Redux State:</h3>
      <p>{stateFormReducer.user_text}</p>
      <p>{props.user_text}</p>
    </div>
  )
} 
const mapStateToProps = (state) => ({
  user_text: state.user_reducer.user_text
})

const mapDispatchToProps = (dispatch) => {
  return {
    input_action_creator: (text) => dispatch(ACTIONS.userInput(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1)



