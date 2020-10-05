import React, { useState } from 'react'
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Button from "material-ui/Button";
import Hidden from "material-ui/Hidden";
import Drawer from "material-ui/Drawer";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import ListItemIcon from "material-ui/List/ListItemIcon";
import ListItemText from "material-ui/List/ListItemText";

// material-ui-icons
import Dashboard from "material-ui-icons/Dashboard";
import Menu from "material-ui-icons/Menu";

// import landingRoutes from "routes/landing.jsx";

import pagesHeaderStyle from "./pagesHeaderStyle.jsx";

const LandingHeader = (props) => {
  const { classes, color, routes } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  
  const location = useLocation();
  const [openState, setStateOpen] = useState({open: false})
  const handleDrawerToggle = () => {
    setStateOpen({ open: !openState.open })
    console.log(openState);
  };
  function activeRoute(routeName) {

    return location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  var list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to={"/admin"} className={classes.navLink}>
          <ListItemIcon className={classes.listItemIcon}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            primary={"Admin"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      {routes.map((prop, key) => {
        if (prop.redirect) {
          return null;
        }
        if (prop.collapse) {
          return null;
        }
        const navLink =
          classes.navLink +
          cx({
            [" " + classes.navLinkActive]: activeRoute(prop.path)
          });
        return (
          <ListItem key={key} className={classes.listItem}>
            <NavLink to={prop.path} className={navLink}>
              <ListItemIcon className={classes.listItemIcon}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                primary={prop.short}
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
  

  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button href="#" className={classes.title}>
            QM Developer
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {list}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.sidebarButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Hidden mdUp implementation="css">
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={openState.open}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(pagesHeaderStyle)(LandingHeader);