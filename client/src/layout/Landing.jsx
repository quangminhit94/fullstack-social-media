import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

// core components
import PagesHeader from 'components_material/Header/PagesHeader.jsx'

import pagesStyle from "assets/jss/layouts/pagesStyle.jsx";

import landingRoutes from 'routes/landing.jsx'

import bgImage from 'assets/img/lock.jpeg'

const Pages = (props) => {
  const { classes, ...rest } = props;
  return (
    <div>
      <PagesHeader { ...rest } />
      <div className={classes.wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {landingRoutes.map( (prop, key) => {
              console.log(prop);
              return (
                <Route
                 path={prop.path}
                 component={prop.component}
                 key={key}/>
              )
            })}
          </Switch>
          <div 
            className={classes.fullPageBackground}
            style={{ backgroundImage: `url(${bgImage})` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(pagesStyle)(Pages);
