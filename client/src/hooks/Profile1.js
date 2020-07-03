import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import * as ACTIONS from '../store/actions/actions';

const Profile1 = (props) => {
  
  const { profileState, errorPage, isAuth } = useSelector(state => ({
    profileState: state.auth_reducer.profile,
    errorPage: state.auth_reducer.form_submit_status,
    isAuth: state.auth_reducer.is_authenticated
  }), shallowEqual);
  const dispatchState = useDispatch();

  const handleError = (error) => {
    console.log(error.response.statusText)
    dispatchState(ACTIONS.formSubmitStatus(`${error.response.statusText}`))
  }

  const addUserInfoToPage = (res) => {
    const profileData = res.data
    dispatchState(ACTIONS.addProfile({ ...profileState, ...profileData}))
  }

  useEffect(() => {
    const { uid } = props.match.params
    console.log(uid)
    Axios.get('/users/' + uid)
      .then(addUserInfoToPage)
      .catch(handleError)
  }, [])

  return (
    <div>
      {profileState ? profileState.email : errorPage}
      <br/>
      {isAuth ? isAuth : 'no'}
    </div>
  )
}

export default Profile1
