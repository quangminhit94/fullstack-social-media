import React, { useEffect, useReducer, useState, useRef } from 'react';
import history from './utils/history'
import Context from './utils/context';
import * as ACTIONS from './store/actions/actions';

import * as AuthReducer from './store/reducers/auth_reducer';
import * as FormReducer from './store/reducers/form_reducer';
import * as PostsReducer from './store/reducers/posts_reducer';

import Routes from './Routes';

import Auth from './utils/Auth';
import Axios from 'axios';

import SimpleReactValidator from 'simple-react-validator';

const auth = new Auth()


const ContextState = (props) => {
    /*
      Auth Reducer
    */
    const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState)

    const [, forceUpdate] = useState();
    const simpleValidator = useRef(new SimpleReactValidator())
    
    // useEffect(() => {
    //   // if all fields valid, send request to server
    //   sendLoginRequest(stateAuthReducer.user);

    // }, [stateAuthReducer.user])

    const handleSetEmail = (event) => {
      const user = {
        email: event.target.value,
      }
      dispatchAuthReducer(ACTIONS.userLoginSubmit({ ...stateAuthReducer.user, ...user}))
    }

    const handleSetPassword = (event) => {
      const user = {
        password: event.target.value
      }
      dispatchAuthReducer(ACTIONS.userLoginSubmit({ ...stateAuthReducer.user, ...user}))
    }
    
    const handleLoginForm = (event) => {
      event.preventDefault();
      event.persist();

      // dispatch user to state
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      // set user state 
      dispatchAuthReducer(ACTIONS.userLoginSubmit({ ...stateAuthReducer.user, ...user}))
      // after that we use useEffect to check user state change then send request to server

      sendLoginRequest(stateAuthReducer.user)
    }

    const sendLoginRequest = (user) => {
      if (simpleValidator.current.allValid()) {
        // alert('You submitted the form and stuff!');
        Axios.post('/auth/login', user)
          .then(res => {
            console.log(res)
            // login success -> show user profile here
            history.replace('/hooks/')
          })
          .catch(err => {
            dispatchAuthReducer(ACTIONS.formSubmitStatus(`${err.response.data}`))
          })
      } else {
        simpleValidator.current.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        forceUpdate(1);
      }
    }

    const handleSignUpForm = (event) => {
      event.preventDefault();
      event.persist();

      // dispatch user to state
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      // set user state 
      dispatchAuthReducer(ACTIONS.userLoginSubmit(user))
      // after that we use useEffect to check user state change then send request to server

      sendSignUpRequest(stateAuthReducer.user)
    }

    const sendSignUpRequest = (user) => {
      if (simpleValidator.current.allValid()) {
        // alert('You submitted the form and stuff!');
        Axios.post('/auth/sign_up', user)
          .then(res => {
            console.log(res)
            // login success -> show user profile here
            history.replace('/hooks/')
          })
          .catch(err => {
            dispatchAuthReducer(ACTIONS.formSubmitStatus(`${err.response.data}`))
          })
      } else {
        simpleValidator.current.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        forceUpdate(1);
      }

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
              formSubmitStatus: stateAuthReducer.form_submit_status,
              loginSubmit: (event) => handleLoginForm(event),
              simpleValidator: simpleValidator.current,
              handleBlurEmailField: (event) => handleSetEmail(event),
              handleBlurPasswordField: (event) => handleSetPassword(event),
              signUpSubmit: (event) => handleSignUpForm(event),

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