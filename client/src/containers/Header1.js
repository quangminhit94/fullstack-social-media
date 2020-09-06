import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button'
// import './Header.scss'

const Header1 = (props) => {

  return (
    <div>
      <NavLink to='/home' activeClassName="active">
        <Button color="inherit">Home</Button>
      </NavLink>
      <NavLink to='/react_sample'>
        <Button color="inherit">React Sample</Button>
      </NavLink>
      <NavLink to='/landing'>
        <Button color="inherit">Landing</Button>
      </NavLink>
      <NavLink to='/posts_hooks'>
        <Button color="inherit">Post Hooks</Button>
      </NavLink>
      <NavLink to='/posts'>
        <Button color="inherit">Forum</Button>
      </NavLink>
      <NavLink to='/private_route'>
        <Button color="inherit">Private Route</Button>
      </NavLink>
      {/* {!props.is_authenticated
        ? <Button color='secondary' variant='outlined' onClick={() => props.auth.login()}>Login</Button>
        : <Button color='primary' variant='outlined' onClick={() => props.auth.logout()}>Logout</Button>
      } */}
    </div>
  )
}

export default Header1
