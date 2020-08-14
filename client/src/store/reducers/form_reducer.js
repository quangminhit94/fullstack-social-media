import * as ACTION_TYPES from '../actions/action_types'


export const initialState = {
  user_textChange: '',
  user_textSubmit: ''
}


export const FormReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION_TYPES.USER_INPUT_CHANGE:
      return {
        ...state,
        user_textChange: payload
      }
    case ACTION_TYPES.USER_INPUT_SUBMIT:
      return {
        ...state,
        user_textSubmit: payload
      }
    default:
      throw new Error();
  }
}