import React from 'react'
import PropTypes from 'prop-types'
import cx from "classnames";

// material-ui components
// import withStyles from "material-ui/styles/withStyles";
// import Card from "material-ui/Card";
// import CardContent from "material-ui/Card/CardContent";
// import CardHeader from "material-ui/Card/CardHeader";
// import CardActions from "material-ui/Card/CardActions";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import postCardStyle from "./postCardStyle.jsx";

function PostCard ({ ...props }) {
  const {
    classes,
    plainCard,
    headerColor,
    cardTitle,
    cardSubtitle,
    content,
    footer,
    footerAlign,
    customCardClasses
  } = props;

  const cardClasses =
    classes.card +
    cx({
      [" " + classes.cardPlain]: plainCard,
      [" " + customCardClasses]: customCardClasses !== undefined
    });

  return (
    <Card className={cardClasses}>
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
      />
      {/* <p className={classes.cardSubtitle}>{cardSubtitle}</p> */}
      <CardActionArea>
        <CardMedia
            className={classes.cardMedia}
            image="https://picsum.photos/400/800"
            title="Contemplative Reptile"
          />
        <CardContent className={classes.cardContent}>
          {content}
        </CardContent>
      </CardActionArea>
        {footer !== undefined ? (
            <CardActions disableSpacing
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