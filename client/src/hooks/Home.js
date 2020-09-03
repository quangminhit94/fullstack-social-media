import React, { useContext, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Context from 'utils/context/context'
import ThemeContext from 'utils/context/ThemeContext'
import LoaderHOC from 'HOC/LoaderHOC'
import Button from '@material-ui/core/Button'

const Slider = () => {
  const { themeState, toggleTheme } = useContext(ThemeContext)

  console.log(themeState)
  return (
    <label className="switch">
      <input
        onChange={toggleTheme}
        type="checkbox"
        checked={themeState.theme === "night"}
      />
      <span className="slider round" />
    </label>
  )
}
const Footer = () => {

  return (
    <footer>
      <label>night theme:</label> <Slider />
    </footer>
  )
};

const Home = ({textHome}) => {
  const context = useContext(Context)
  // const initialThemeState = themeContext
  const [themeState, setThemeState] = useState({theme: 'night'})

  const toggleTheme = evt => {
    console.log(evt.target.checked)
    setThemeState({ theme: evt.target.checked ? "night" : "day" });
    console.log(evt.target.checked)
    console.log('themeState', themeState)
  };
  
  return (
    <div>
      {/* Home: {textHome} */}
      
      <ThemeContext.Provider value={{themeState, toggleTheme}}>
        <div className={themeState.theme}>
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
          
          <Footer />
        </div>
      </ThemeContext.Provider>
      
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