import React from "react";
import PropTypes from "prop-types";

// material-ui components
import { withStyles } from "@material-ui/core/styles";

import typographyStyle from "./typographyStyle.jsx";

function Danger({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </p>
  );
}

Danger.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(typographyStyle)(Danger);
