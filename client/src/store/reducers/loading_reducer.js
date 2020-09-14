import * as ACTION_TYPES from '../actions/action_types'


export const initialState = {
  showLoading: false
}


export const LoadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION_TYPES.SHOW_LOADING:
      return {
        ...state,
        showLoading: true
      }
    case ACTION_TYPES.HIDE_LOADING:
      return {
        ...state,
        showLoading: false
      }
    default:
      return state
      // throw new Error();
  }
}