import React from 'react'

import root from "react-shadow/styled-components";

/* eslint import/no-webpack-loader-syntax: off */
import materialStyle from "!!raw-loader!assets/sass/material-dashboard-pro-react.css"

const MaterialWrapper = (WrappedComponent) => {
  // And return another component
  class HOC extends React.Component {
    render() {
      return (
        <root.div>
          <WrappedComponent {...this.props} >
          </WrappedComponent>
          <style type="text/css">
            {materialStyle.toString()}
          </style>
        </root.div>
      )
    }
  }
  return HOC;
};

export default MaterialWrapper