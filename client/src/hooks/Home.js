import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Context from '../utils/context'
import LoaderHOC from '../HOC/LoaderHOC'
const Home = ({textHome}) => {
  const context = useContext(Context)
  return (
    <div>
      Home: {textHome}
      <Link style={{ paddingLeft: '5px', textDecoration: 'none' }}
        to={{ pathname: "/profile1/" + localStorage.user_id }}>
        User number {localStorage.user_id}
      </Link>
      <br/>
      <button onClick={() => context.logout()}>Logout</button>
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