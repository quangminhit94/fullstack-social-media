import React from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

// core components
import PagesHeader from 'components_material/Header/PagesHeader.jsx'

import pagesStyle from "assets/jss/layouts/pagesStyle.jsx";

import bgImage from 'assets/img/register.jpeg'

const Pages = (props) => {
  const { classes, ...rest } = props;
  return (
    <div>
      <PagesHeader { ...rest } />
      <div className={classes.wrapper}>
        <div className={classes.fullPage}>

          <div 
            className={classes.fullPageBackground}
            style={{ backgroundImage: `url(${bgImage})` }}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(pagesStyle)(Pages);
