import React from 'react'
export default function PostCard ({ ...props }) {
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
  headerColor: "purple"
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