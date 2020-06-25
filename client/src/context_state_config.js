import React, { useReducer } from 'react';
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';

import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/form_reducer';
import * as PostsReducer from './store/reducers/posts_reducer';


import Routes from './Routes';

import Auth from './utils/Auth';
import Axios from 'axios';

const auth = new Auth()


const ContextState = (props) => {
    /*
      Auth Reducer
    */
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer,
                                                               AuthReducer.initialState)

    const handleLoginForm = (event) => {
      event.preventDefault();
      event.persist();
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      Axios.post('/auth/login', user)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      dispatchAuthReducer(ACTIONS.userLoginSubmit(user))
    }
    
    const handleLogin = () => {
      dispatchAuthReducer(ACTIONS.loginSuccess())
    }

    const handleLogout = () => {
      dispatchAuthReducer(ACTIONS.loginFailure())
    }


    const handleDBProfile = (profile) => {
      dispatchAuthReducer(ACTIONS.setDbProfile(profile))
    }

    const handleRemoveDBProfile = () => {
      dispatchAuthReducer(ACTIONS.removeDbProfile())
    }

    const handleAddProfile = (profile) => {
      dispatchAuthReducer(ACTIONS.addProfile(profile))
    }

    const handleRemoveProfile = () => {
      dispatchAuthReducer(ACTIONS.removeProfile())
    }



    /*
      Form Reducer
    */

    const [stateFormReducer, dispatchFormReducer] = useReducer(FormReducer.FormReducer,
                                                               FormReducer.initialState)

    const handleFormChange = (event) => {
      dispatchFormReducer(ACTIONS.userInputChange(event.target.value))
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      event.persist();
      dispatchFormReducer(ACTIONS.userInputSubmit(event.target.useContext.value))
    };


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


    //Handle authentication from callback
    const handleAuthentication = (props) => {
      if(props.location.hash) {
        auth.handleAuth()
      }
    }


    return(
      <div>
      <Context.Provider
          value={{

            //Auth Reducer
            //keep for global state
            authState: stateAuthReducer.is_authenticated,
            dbProfileState: stateAuthReducer.db_profile,
            profileState:  stateAuthReducer.profile,

            handleAddDBProfile: (profile) => handleDBProfile(profile),
            handleRemoveDBProfile: () => handleRemoveDBProfile(),
            handleUserAddProfile: (profile) => handleAddProfile(profile),
            handleUserRemoveProfile: () => handleRemoveProfile(),
            handleUserLogin: () => handleLogin(),
            handleUserLogout: () => handleLogout(),

            // user login
            userState: stateAuthReducer.user,
            loginSubmit: (event) => handleLoginForm(event),

            //Form Reducer
            useContextChangeState: stateFormReducer.user_textChange,
            useContextSubmitState: stateFormReducer.user_textSubmit,
            useContextSubmit: (event) => handleFormSubmit(event),
            useContextChange: (event) => handleFormChange(event),

            //Posts State
            postsState: statePostsReducer.posts,
            handleAddPosts: (posts) => handleSetPosts(posts),
            handleRemovePosts: () => handleRemovePosts(),

            //Handle auth
            //keep for global state
            handleAuth: (props) => handleAuthentication(props),
            authObj: auth
          }}>
          <Routes />
      </Context.Provider>
      </div>
    )
}


export default ContextState;