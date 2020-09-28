import React from 'react'
import PropTypes from 'prop-types'

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Card from "material-ui/Card";
import CardContent from "material-ui/Card/CardContent";
import CardHeader from "material-ui/Card/CardHeader";
import CardActions from "material-ui/Card/CardActions";

import postCardStyle from "assets/jss/components/postCardStyle.jsx";

function PostCard ({ ...props }) {
  const {
    classes,
    headerColor,
    cardTitle,
    cardSubtitle,
    content,
    footer,
    footerAlign
  } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root:
            classes.cardHeader +
            " " +
            classes[headerColor + "CardHeader"],
          title: classes.cardTitle,
          subheader: classes.cardSubtitle
        }}
        title={cardTitle}
        // subheader={socials}
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

PostCard.defaultProps = {
  headerColor: "purple"
};

PostCard.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    "orange",
    "green",
    "red",
    "blue",
    "purple",
    "rose"
  ]),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node,
  socials: PropTypes.node,
  footerAlign: PropTypes.oneOf(["left", "right", "center"]),
  customCardClass: PropTypes.string
};

export default withStyles(postCardStyle)(PostCard);