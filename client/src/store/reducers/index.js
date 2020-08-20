
import {AuthReducer} from './auth_reducer';
import {UserReducer} from './user_reducer';
import {PostsReducer} from './posts_reducer';
import {HooksReducer} from '../hooks_reducer/hooks_reducer'

// Thunk
import { repos, loadingInProgress, loadingError } from '../thunk_reducer/thunk_reducer'

// Saga
import todosReducer from "../saga_reducers/todosReducer";
import visibilityReducer from "../saga_reducers/visibilityReducer";
import notificationReducer from "../saga_reducers/notificationReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth_reducer: AuthReducer,
  user_reducer: UserReducer,
  posts_reducer: PostsReducer,
  hooks_reducer: HooksReducer,
  // Thunk,
  repos, loadingInProgress, loadingError,
  // Saga
  todosReducer, visibilityReducer, notificationReducer
})

export default rootReducer