import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import withStyles from "material-ui/styles/withStyles";

// core components
import LandingHeader from 'components_material/Header/LandingHeader.jsx'

import landingStyle from "./landingStyle.jsx";

import landingRoutes from 'routes/landing.jsx'

import bgImage from 'assets/img/lock.jpeg'

import Footer from "components_material/Footer/Footer.jsx";

const Landing = (props) => {
  const { classes, ...rest } = props;
  console.log("...rest", {...rest});

  function getRoute() {
    return props.location.pathname !== "/maps/full-screen-maps";
  }
  return (
    <div>
      <LandingHeader {...rest} routes={landingRoutes}/>
      <div className={classes.wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {landingRoutes.map( (prop, key) => {
              if(prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              if(prop.collapse) {
                return prop.views.map((prop, key) => {
                  
                  console.log('component', prop);
                  return (
                    <Route path={prop.path} component={prop.component} key={key} />
                  );
                });
              }
              return (
                <Route path={prop.path} component={prop.component} key={key}/>
              )
            })}

          </Switch>
          <Footer white routes={landingRoutes} />
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
