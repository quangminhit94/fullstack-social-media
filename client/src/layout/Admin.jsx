import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import MenuBar from 'components_bootstrap/MenuBar/MenuBar'

import adminRoutes from "routes/admin.jsx";

export const Admin = (props) => {
  return (
    <div>
      <MenuBar routes={adminRoutes}/>
      <div>
        <Switch>
            {adminRoutes.map( (prop, key) => {
              console.log(prop);
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
