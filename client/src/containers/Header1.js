import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

import Button from '@material-ui/core/Button'
const Header1 = () => {


  return (
    <div>
      <Link to='/home' style={{ padding: '5px' }}>
        Home
        </Link>
      <Link to='/profile1' style={{ padding: '5px' }}>
        Profile
      </Link>
      <Link to='/form1' style={{ padding: '5px' }}>
        Form 1
        </Link>
      <Link to='/hooks' style={{ padding: '5px' }}>
        Hooks
        </Link>
        <Link to='/hooks_form' style={{ padding: '5px' }}>
        Hooks Form
        </Link>
      <Link to='/posts_hooks' style={{ padding: '5px' }}>
        Post Hooks
        </Link>
      <Link to='/posts' style={{ padding: '5px' }}>
        Forum
        </Link>
      <Link to='/private_route' style={{ padding: '5px' }}>
        Private Route
        </Link>
      {/* {!this.props.is_authenticated
        ? <Button color='secondary' variant='outlined' onClick={() => this.props.auth.login()}>Login</Button>
        : <Button color='primary' variant='outlined' onClick={() => this.props.auth.logout()}>Logout</Button>
      } */}
    </div>
  )
}

export default Header1
