import React from "react";
import PropTypes from "prop-types";

// material-ui components
import { withStyles } from "@material-ui/core/styles";

import typographyStyle from "./typographyStyle.jsx";

function Info({ ...props }) {
  const { classes, children } = props;
  return (
    <p className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </p>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(typographyStyle)(Info);
