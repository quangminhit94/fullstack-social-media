
import {AuthReducer} from './auth_reducer';
import {UserReducer} from './user_reducer';
import {PostsReducer} from './posts_reducer';
import {HooksReducer} from '../hooks_state/hooks_reducer'
import { combineReducers } from 'redux';
const loadingError = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_IN_PROGRESS':
      return action.isLoading;
    default:
      return state;
  }
}

const repos = (state = [], action) => {
  switch (action.type) {
    case 'LOADING_SUCCESS':
      return action.repos
    case 'CLEAR_REPOS':
      return []
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth_reducer: AuthReducer,
  user_reducer: UserReducer,
  posts_reducer: PostsReducer,
  hooks_reducer: HooksReducer,
  thunk_users: (state = [], action) => action.payload || state,
  repos,
  loadingError,
  loadingInProgress
})

export default rootReducer