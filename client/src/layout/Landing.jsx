import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import withStyles from "material-ui/styles/withStyles";

// core components
import PagesHeader from 'components_material/Header/PagesHeader.jsx'

import landingStyle from "assets/jss/layouts/pagesStyle.jsx";

import landingRoutes from 'routes/landing.jsx'

import bgImage from 'assets/img/lock.jpeg'

import Footer from "components_material/Footer/Footer.jsx";

const Landing = (props) => {
  const { classes, ...rest } = props;
  console.log("wrapper", classes.wrapper);
  return (
    <div>
      <PagesHeader {...rest} />
      <div className={classes.wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {landingRoutes.map( (prop, key) => {
              console.log(prop.component);
              return (
                <Route
                 path={prop.path}
                 component={prop.component}
                 key={key}/>
              )
            })}
          </Switch>
          <Footer white />
          <div 
            className={classes.fullPageBackground}
            style={{ backgroundImage: `url(${bgImage})` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(landingStyle)(Landing);
