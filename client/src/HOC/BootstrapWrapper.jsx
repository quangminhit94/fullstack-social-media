import React from 'react'
import PropTypes from 'prop-types'

import root from "react-shadow/styled-components";
import * as e from "./styles.jsx";
// import bootstrapStyles from "assets/sass_bootstrap/light-bootstrap-dashboard-react.css"
// import bootstrapStyles from "./styles.css"

export default (WrappedComponent) => {
  
  const BootStrapWrapper = ({ ...props }) => {
    
  const bootstrapStyles = require("./styles.css").toString()
  console.log(bootstrapStyles.toString());
    return (
    <root.div className="quote">
      <q>There is strong shadow where there is much light.</q>
      <e.Author>― Johann Wolfgang von Goethe.</e.Author>
      <a href="">test</a>
      <style type="text/css">{bootstrapStyles}</style>
      <WrappedComponent {...props} >
      </WrappedComponent>
    </root.div>
  )}

  BootStrapWrapper.propTypes = {
  }

  return BootStrapWrapper
}
