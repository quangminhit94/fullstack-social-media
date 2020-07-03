import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Context from '../utils/context'
const Home = (props) => {
  const context = useContext(Context)
  return (
    <div>
      Home
      <Link style={{ paddingLeft: '5px', textDecoration: 'none' }}
        to={{ pathname: "/profile1/" + localStorage.user_id }}>
        User number {localStorage.user_id}
      </Link>
      <br/>
      <button onClick={() => context.logout()}>Logout</button>
    </div>
  )
}

export default Home