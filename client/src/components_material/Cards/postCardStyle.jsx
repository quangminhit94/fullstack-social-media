// ##############################
// // // LoginCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader
} from "assets/jss/material-dashboard-pro-react.jsx";

const postCardStyle = {
  card: {
    ...card,
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    transform: "translate3d(0, 0, 0)",
    transition: "all 300ms linear"
  },
  cardHeader: {
    ...defaultFont,
    textAlign: "center",
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  roseCardHeader,
  cardTitle: {
    ...defaultFont,
    color: "#FFFFFF",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "700",
    fontSize: "1.3em"
  },
  cardSubtitle: {
    ...defaultFont,
    textAlign: "center",
    fontSize: "14px"
  },
  cardActions: {
    background: "#e7cbeb"
  },
  cardMedia: {
    height: 140,
  },
  cardContent: {
    padding: "20px 10px",
    position: "relative",
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  center: {
    textAlign: "center"
  }
};

export default postCardStyle;
