import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import MenuBar from '../components_material/MenuBar/MenuBar'

import landingRoutes from "../routes.js";

const getRoutes = routes => {
  return routes.map((prop, key) => {
    if (prop.layout === "/landing") {
      return (
        <Route
          path={prop.layout + prop.path}
          render={props => (
            <prop.component
              {...props}
              // handleClick={this.handleNotificationClick}
            />
          )}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

export const Landing = (props) => {
  return (
    <div>
      <MenuBar routes={landingRoutes}/>
      <div>
        <Switch>{getRoutes(landingRoutes)}</Switch>
      </div>
    </div>
  )
}

// Landing.propTypes = {
//   prop: PropTypes
// }

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
