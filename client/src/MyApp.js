import React, { useState, useReducer } from 'react'

import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history/history';
import indexRoutes from './routes/index.jsx'

import ContextState from './context_state_config';

const MyApp = () => {
  
  return (
    <Router history={history} >
      
      <ContextState>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />
          })}
        </Switch>
      </ContextState>
    </Router>
  )
}

export default MyApp;