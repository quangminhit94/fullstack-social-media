// ##############################
// // // RegularCard styles
// #############################

import { card, defaultFont } from "assets/jss/material-dashboard-pro-react.jsx";

const regularCardStyle = {
  card: {
    ...card,
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    marginBottom: "100px",
    padding: "40px 0px",
    transform: "translate3d(0, 0, 0)",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    padding: "15px 20px 0",
    zIndex: "3"
  },
  cardTitle: {
    ...defaultFont,
    color: "#3C4858",
    textDecoration: "none",
    marginTop: "0",
    marginBottom: "3px",
    fontSize: "1.3em",
    "& small": {
      fontWeight: "400",
      lineHeight: "1",
      color: "#777"
    }
  },
  right: {
    textAlign: "right"
  },
  left: {
    textAlign: "left"
  },
  center: {
    textAlign: "center"
  },
  cardSubtitle: {
    ...defaultFont,
    color: "#999999",
    fontSize: "14px",
    margin: "0 0 10px"
  },
  cardContent: {
    padding: "15px 20px !important",
    position: "relative"
  }
};

export default regularCardStyle;
