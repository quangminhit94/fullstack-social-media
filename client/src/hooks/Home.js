import React, { useContext } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Context from '../utils/context'
import LoaderHOC from '../HOC/LoaderHOC'
import Button from '@material-ui/core/Button'
// import history from '../utils/history'



const Home = ({textHome}) => {
  const context = useContext(Context)

  return (
    <div>
      Home: {textHome}
      <br/>
      <br/>
      {!localStorage.user_id
        ? <Link style={{ paddingLeft: '5px', textDecoration: 'none' }}
            to={{ pathname: "/login"}}>
            <Button color='secondary' variant='outlined'>Login</Button>
          </Link>
         : <div>
            <Link style={{ paddingLeft: '5px', textDecoration: 'none' }}
                to={{ pathname: "/profile1/" + localStorage.user_id }}>
                Hello {localStorage.user_id} </Link> 
            <Button color='secondary' variant='outlined' onClick={() => context.logout()}>Logout</Button>
          </div>
      }
    </div>
  )
}

Home.defaultProps = {
  textHome: 'Home',
}

Home.propTypes = {
  textHome: PropTypes.string.isRequired
}

export default LoaderHOC(Home)