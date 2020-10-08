import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// material-ui components
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";

import loginCardStyle from "./loginCardStyle.jsx";

function LoginCard({ ...props }) {
  const {
    classes,
    headerColor,
    plainCard,
    cardTitle,
    cardSubtitle,
    content,
    footer,
    socials,
    footerAlign,
    customCardClass,
  } = props;
  const plainCardClasses = cx({
    [" " + classes.cardPlain]: plainCard, // plainCard true turn to transparent
    [" " + customCardClass]: customCardClass !== undefined, // if has cardHidden
  }); // cx will join the object to text with space between them example
  const testCx = cx({
    ["a"]: true,
    [" " + customCardClass]: customCardClass,
  });
  console.log("LoginCard -> testCx:", testCx);
  const cardPlainHeaderClasses = cx({
    [" " + classes.cardPlainHeader]: plainCard,
  });

  return (
    <Card className={classes.card + plainCardClasses}>
      <CardHeader
        classes={{
          root:
            classes.cardHeader +
            " " +
            classes[headerColor + "CardHeader"] +
            cardPlainHeaderClasses,
          title: classes.cardTitle,
          subheader: classes.cardSubtitle,
        }}
        title={cardTitle}
        subheader={socials}
      />
      <p className={classes.cardSubtitle}>{cardSubtitle}</p>
      <CardContent className={classes.cardContent}>{content}</CardContent>
      {footer !== undefined ? (
        <CardActions
          className={classes.cardActions + " " + classes[footerAlign]}
        >
          {footer}
        </CardActions>
      ) : null}
    </Card>
  );
}

LoginCard.defaultProps = {
  headerColor: "purple",
};

LoginCard.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose",
  ]),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  socials: PropTypes.node,
  footerAlign: PropTypes.oneOf(["left", "right", "center"]),
  customCardClass: PropTypes.string,
};

export default withStyles(loginCardStyle)(LoginCard);
