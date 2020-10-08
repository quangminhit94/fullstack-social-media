import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components_material/Grid/GridContainer.jsx";
import ItemGrid from "components_material/Grid/ItemGrid.jsx";

import postDetailStyle from "./postDetailStyle.jsx";

function PostDetail({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <ItemGrid xs={12}>
          <p>Hello</p>
        </ItemGrid>
      </GridContainer>
    </div>
  );
}

export default compose(
  withStyles(postDetailStyle)
  // connect(mapStateToProps, null)
)(PostDetail);
