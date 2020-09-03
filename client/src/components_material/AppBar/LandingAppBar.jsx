import React from 'react';
// import {  } from '@material-ui/core/styles';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Header1 from 'containers/Header1'

const muiTheme = createMuiTheme({
  status: {
    danger: orange[300],
  },
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      '& a': {
        color: 'white'
      }
    },
    buttonColor: {
      color: theme.status.danger
    }
  }
});

function WrapComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Header1 />
          </div>
          <Button classes={{root: classes.buttonColor}}>Landing</Button>
          <Button color="inherit">Admin</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function LandingAppBar() {

  return (
    <ThemeProvider theme={muiTheme}>
      <WrapComponent/>
    </ThemeProvider>
  );
}
