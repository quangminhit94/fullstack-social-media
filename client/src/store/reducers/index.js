
import {AuthReducer} from './auth_reducer';
import {UserReducer} from './user_reducer';
import {PostsReducer} from './posts_reducer';
import {HooksReducer} from '../hooks_reducer/hooks_reducer'
import {LoadingReducer} from './loading_reducer'

// Thunk
import { repos, loadingInProgress, loadingError } from '../thunk_reducer/thunk_reducer'

// Saga
import SagaTodoReducer from "./saga_todo_reducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth_reducer: AuthReducer,
  user_reducer: UserReducer,
  posts_reducer: PostsReducer,
  hooks_reducer: HooksReducer,
  // Loading
  loading_reducer: LoadingReducer,
  // Thunk,
  repos, loadingInProgress, loadingError,
  // Saga
  saga_todo_reducer: SagaTodoReducer
})

export default rootReducer