import React from 'react'
import PropTypes from 'prop-types'

import root from "react-shadow/styled-components";

// Add Bootstrap style was built from sass
/* eslint import/no-webpack-loader-syntax: off */
import bootstrapStyles from "!!raw-loader!assets/sass_bootstrap/light-bootstrap-dashboard-react.css"

// Custom bootstrap my our styles
import animateStyle from "!!raw-loader!assets/css_bootstrap/animate.min.css";
import demoStyle from "!!raw-loader!assets/css_bootstrap/demo.css";
import iconStyle from "!!raw-loader!assets/css_bootstrap/pe-icon-7-stroke.css";

const BootStrapWrapper = (WrappedComponent) => {
  // And return another component
  class HOC extends React.Component {
    render() {
      return (
        <root.div>
          <WrappedComponent {...this.props} >
          </WrappedComponent>
          <style type="text/css">
            {bootstrapStyles.toString()}
            {demoStyle.toString()}
          </style>
        </root.div>
      )
    }
  }
  return HOC;
};

export default BootStrapWrapper