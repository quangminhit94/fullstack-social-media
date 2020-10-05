import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import typographyStyle from "./typographyStyle.jsx";

function Warning({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </p>
  );
}

Warning.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Warning);
