import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

import Button from '@material-ui/core/Button'
const Header1 = (props) => {


  return (
    <div>
      <Link to='/home' style={{ padding: '5px' }}>
        Home
        </Link>
      <Link to='/react_sample' style={{ padding: '5px' }}>
        React Sample
        </Link>
      <Link to='/landing' style={{ padding: '5px' }}>
        Landing
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
      {/* {!props.is_authenticated
        ? <Button color='secondary' variant='outlined' onClick={() => props.auth.login()}>Login</Button>
        : <Button color='primary' variant='outlined' onClick={() => props.auth.logout()}>Logout</Button>
      } */}
    </div>
  )
}

export default Header1
