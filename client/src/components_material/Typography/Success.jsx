import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import typographyStyle from "./typographyStyle.jsx";

function Success({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </p>
  );
}

Success.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Success);
