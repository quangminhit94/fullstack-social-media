import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { NavLink } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";

// custom component
import ConcurrentUserNumber from "components_custom/ConcurrentUserNumber.jsx";


import footerStyle from "./footerStyle";

function Footer({ ...props }) {
  const { classes, fluid, white, rtlActive, routes } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  })
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={block}>
                {rtlActive ? "الصفحة الرئيسية" : "Home"}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={block}>
                {rtlActive ? "شركة" : "Company"}
              </a>
            </ListItem>
            {routes.map((prop, key) => {
              if(prop.collapse) {
                return prop.views.map((prop, key) => {
                    return (
                      <ListItem key={key} className={classes.inlineBlock}>
                        <NavLink to={prop.path}>
                          {prop.name}
                        </NavLink>
                      </ListItem>
                    )
                  }
                )
              }
            })}
            
            <ListItem className={classes.inlineBlock}>
              <a href="#contact" className={block}>
                {rtlActive ? "بعدسة" : "Contact"}
              </a>
            </ListItem>
            
            
          </List>
        </div>
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a href="#home" className={anchor}>
            {rtlActive ? "Copyright reserved" : "Copyright reserved"}
          </a>
          {/* {rtlActive
            ? ", مصنوعة مع الحب لشبكة الإنترنت أفضل"
            : " "} */}
          <ConcurrentUserNumber />
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
