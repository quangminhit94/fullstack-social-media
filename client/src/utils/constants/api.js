import AxiosService from '../AxiosService'

// server endpoint
const HEROKU_ENDPOINT = `https://mickey-portfolio.herokuapp.com/`

export function getList() {
  return AxiosService.get('https://jsonplaceholder.typicode.com/hello')
}
/** EXPLAIN REDUX FLOW

// Component
Component use connect
connect will help you dispatch action obj
const mapDispatchToProps = (dispatch) => ({
  userInput: data => dispatch(ACTIONS.userInput(data)),
  // equal with
  userInput: data => dispatch({
    type: ACTION_TYPES.USER_INPUT,
		payload: data
  })
})

// Action
action actually is a object has 2 key: {type: , payload: }
export const userInput = (data) => {
	return {
		type: ACTION_TYPES.USER_INPUT,
		payload: data
	}
}

// Reducer
export const initialState = {
  user_text: 'test',
}

reducer will receive action obj {type, payload} then update the state with matched type

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        user_text: payload
      }
    default:
      return state
  }
}

*/
