import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  user_text_change: '',
  user_text_submit: ''
}


export const UserHooksReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION_TYPES.USER_INPUT_CHANGE:
      return {
        ...state,
        user_text_change: payload
      }
    case ACTION_TYPES.USER_INPUT_SUBMIT:
      return {
        ...state,
        user_text_submit: payload
      }
    default:
      return state
  }
}

