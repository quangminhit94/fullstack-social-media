import React, { createContext, useReducer } from 'react';

import * as PostsReducer from 'store/reducers/posts_reducer';
import * as ACTIONS from 'store/actions/actions';

const defaultValue = {
  value: "hello world"
}

const PostContext = createContext(defaultValue);

const PostContextState = (props) => {
  
  /*
    Posts Reducer
  */

  const [statePostsReducer, dispatchPostsReducer] = useReducer(PostsReducer.PostsReducer,
                                                       PostsReducer.initialState)


  const handleSetPosts = (posts) => {
    dispatchPostsReducer(ACTIONS.fetchDbPosts(posts) )
  }

  const handleRemovePosts = () => {
    dispatchPostsReducer(ACTIONS.removeDbPosts() )
  }


  return(
    <div>
      <PostContext.Provider
          value={{

            //Posts State
            postsState: statePostsReducer.posts,
            handleAddPosts: (posts) => handleSetPosts(posts),
            handleRemovePosts: () => handleRemovePosts(),
          }}>
          {props.children}
      </PostContext.Provider>
    </div>
  )
}

export {
  PostContext,
  PostContextState,
}