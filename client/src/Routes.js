import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container1 from './containers/Container1'
import LandingAppBar from './components_material/AppBar/LandingAppBar'
import Profile from './containers/Profile';
import Profile1 from './hooks/Profile1';
import Home from './hooks/Home';
import Form1 from './containers/Form1';
// import RenderList from './containers/renderlist';


import Component1 from './functional/Component1';
import Callback from './functional/Callback';
import PrivateComponent from './functional/PrivateComponent';
import UnAuthRedirect from './functional/UnAuthRedirect';
// import Home from './functional/home';
import RenderListItem from './functional/RenderListItem';
import SignUpPost from './functional/Signup';
import SignUp from './Users/SignUp';

import Posts from './Blog/Posts';
import PostsHooks from './Blog/PostsHooks';
import AddPost from './Blog/AddPost';
import ShowPost from './Blog/ShowPost';
import EditPost from './Blog/EditPost';

import ShowUser from './Profile/ShowUser';
import SendMessage from './Profile/SendMessage';
import ShowMessages from './Profile/ShowMessages';
import ReplytoMessage from './Profile/ReplyToMessage';

import * as ACTIONS from './store/actions/actions';

import HooksContainer from './hooks/HooksContainer'
import HooksForm from './hooks/HooksForm'
import ThunkGit from './hooks/ThunkGit'
import SagaTodo from './hooks/SagaTodo'
import Login from './Users/Login'

import Auth from './utils/auth/Auth';
import AuthCheck from './utils/auth/AuthCheck';

import { Link, Route, Switch, Redirect } from 'react-router-dom';

import LandingLayout from './layout/Landing';

export const auth = new Auth()

const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth.handAuth()
  }
}

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={props => auth.isAuthenticated() === true
      ? <Component auth={auth} {...props} />
      : <Redirect to={{ pathname: '/signup' }} />
    }
    />
  )
}
const ReactSample = ({match}) => {
  
  return (
    <div>
      <h1>React Sample</h1>
      <ul>
        <li>
          <Link to={`${match.url}/component1`} style={{ padding: '5px' }}>
          Component 1
          </Link>
        <Link to={`${match.url}/form1`} style={{ padding: '5px' }}>
          Form 1
          </Link>
        <Link to={`${match.url}/hooks`} style={{ padding: '5px' }}>
          Hooks
          </Link>
        <Link to={`${match.url}/hooks_form`} style={{ padding: '5px' }}>
          Hooks Form
          </Link>
          <Link to={`${match.url}/thunk_git`} style={{ padding: '5px' }}>
          Thunk Git
          </Link>
          <Link to={`${match.url}/saga_todo`} style={{ padding: '5px' }}>
          Saga Todo
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.path} >
          select a path
        </Route>
        <Route path={`${match.path}/component1`} component={Component1}/>
        <Route path={`${match.path}/form1`} component={Form1}/>
        <Route path={`${match.path}/hooks`} component={HooksContainer}/>
        <Route path={`${match.path}/hooks_form`} component={HooksForm}/>
        <Route path={`${match.path}/thunk_git`} component={ThunkGit}/>
        <Route path={`${match.path}/saga_todo`} component={SagaTodo}/>
      </Switch>
    </div>
  )
}



class Routes1 extends Component {
  componentDidMount() {
    if (auth.isAuthenticated()) {
      this.props.login_success()
      auth.getProfile(() => { this.props.add_profile(auth.userProfile) })
      // setTimeout(() => {this.props.add_profile(auth.userProfile)}, 400)
    }
    else {
      this.props.login_failure()
      this.props.remove_profile()
    }
  }

  render() {
    return (
      <div>
          <div>
            <LandingAppBar />
            <Switch>
              <Route path='/react_sample' component={ReactSample} />

              <Route exact path='/container1' render={() => <Container1 auth={auth} />} />
              <Route path='/auth_check' render={() => <AuthCheck auth={auth} />} />
              <Route path='/redirect' component={UnAuthRedirect} />

              <Route path="/user/:name" component={ShowUser} />
              <PrivateRoute path="/send_message" auth={auth} component={SendMessage} />
              <PrivateRoute path="/show_messages/:id" auth={auth} component={ShowMessages} />
              <PrivateRoute path="/reply_to_message" auth={auth} component={ReplytoMessage} />

              <Route path='/posts' component={Posts} />
              <Route path='/posts_hooks' component={PostsHooks} />
              <Route path='/post/:pid' component={ShowPost} />
              <Route path='/edit_post/:pid' component={EditPost} />
              <Route path='/add_post' component={AddPost} />
              <Route path='/login' render={(props) => <Login image='/image_demo.png' {...props} />} />
              <Route path="/signup_post" render={(props) => <SignUpPost auth={auth} {...props} />} />
              <Route path="/signup" render={(props) => <SignUp image='/image_demo.png' {...props} />} />

              <Route path='/callback' render={(props) => { handleAuthentication(props); return <Callback /> }} />

              <Route path="/list_item/:id" component={RenderListItem} />

              <PrivateRoute path="/private_route" auth={auth} component={PrivateComponent} />
              <PrivateRoute path="/profile" auth={auth} component={Profile} />
              <Route path="/profile1/:uid" component={Profile1} />
              <Route path="/home" render={(props) => <Home textHome='test' {...props}></Home>} />

              <Route path="/landing" render={props => <LandingLayout {...props} />} />
              <Redirect from="/" to="/landing" />
            </Switch>
          </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.loginSuccess()),
    login_failure: () => dispatch(ACTIONS.loginFailure()),
    add_profile: (profile) => dispatch(ACTIONS.addProfile(profile)),
    remove_profile: () => dispatch(ACTIONS.removeProfile())
  }
}





export default connect(null, mapDispatchToProps)(Routes1);
