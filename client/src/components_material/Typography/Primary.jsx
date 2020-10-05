import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

import typographyStyle from "./typographyStyle.jsx";

function Primary({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.primaryText}>
      {children}
    </p>
  );
}

Primary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Primary);
