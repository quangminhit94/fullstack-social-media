import React, { useEffect, useContext, useReducer } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context'
import * as AuthReducer from '../store/reducers/auth_reducer';

const Profile1 = (props) => {
  
  // const { profileState, errorPage, isAuth } = useSelector(state => ({
  //   profileState: state.auth_reducer.profile,
  //   errorPage: state.auth_reducer.form_submit_status,
  //   isAuth: state.auth_reducer.is_authenticated
  // }), shallowEqual);
  const context = useContext(Context)

  const dispatchState = useDispatch();
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState);
  const {
    profile,
    form_submit_status,
    is_authenticated
  } = stateAuthReducer;
  const handleError = (error) => {
    console.log(error.response.statusText)
    dispatchAuthReducer(ACTIONS.formSubmitStatus(`${error.response.statusText}`))
    console.log('from reducer: ' + form_submit_status, 'from context: ' + context.errorPage)
  }

  const addUserInfoToPage = (res) => {
    const profileData = res.data
    dispatchAuthReducer(ACTIONS.addProfile({ ...profile, ...profileData}))
  }

  useEffect(() => {
    const { uid } = props.match.params
    console.log(uid)
    Axios.get('/users/' + uid)
      .then(addUserInfoToPage)
      .catch(handleError)
  }, [form_submit_status])

  return (
    <div>
      Hello
      {profile ? profile.email : form_submit_status}
      <br/>
      {is_authenticated ? is_authenticated : 'no'}
    </div>
  )
}

export default Profile1
