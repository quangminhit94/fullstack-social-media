import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  is_authenticated: false,
  profile: null,
  db_profile: null,
  user: {},
  form_submit_status: ''
}


export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FORM_SUBMIT_STATUS:
      return {
        ...state,
        form_submit_status: payload
      }
    case ACTION_TYPES.USER_LOGIN_SUBMIT:
      return {
        ...state,
        user: payload
      }
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true
      }
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false
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

