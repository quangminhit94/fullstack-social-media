import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Link, Redirect } from 'react-router-dom'

import MenuBar from 'components_bootstrap/MenuBar/MenuBar'

import adminRoutes from "routes/admin.jsx";

export const Admin = (props) => {
  return (
    <div>
      <ul>
        {adminRoutes.map( (prop, key) => {
          console.log(prop.component);
          return (
            <li>
              <Link
                to={prop.path}
                className="nav-link"
                activeClassName="active"
              >
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      <div>
        <Switch>
          {adminRoutes.map( (prop, key) => {
            if (prop.redirect) {
              return (
                <Redirect from={prop.path} to={prop.pathTo} key={key} />
              );
            }
            return (
              <Route
                path={prop.path}
                component={prop.component}
                key={key}/>
            )
          })}
        </Switch>
      </div>
    </div>
  )
}

// Admin.propTypes = {
//   prop: PropTypes
// }

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
