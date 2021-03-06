import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  is_authenticated: false,
  state_prop1: false,
  profile: null,
  db_profile: null
}


export const HooksReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true,
        state_prop1: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false,
        state_prop1: false
      }
    case ACTION_TYPES.ADD_PROFILE:
      return {
        ...state,
        profile: payload
      }
    case ACTION_TYPES.REMOVE_PROFILE:
      return {
        ...state,
        profile: null
      }
    case ACTION_TYPES.SET_DB_PROFILE:
      return {
        ...state,
        db_profile: payload
      }
    case ACTION_TYPES.REMOVE_DB_PROFILE:
      return {
        ...state,
        db_profile: null
      }
    default:
      return state
  }
}

