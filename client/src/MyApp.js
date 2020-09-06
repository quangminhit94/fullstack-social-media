import React, { useState, useReducer } from 'react'

import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history/history';
import indexRoutes from './routes/index.jsx'

import ContextState from './context_state_config';
import { PostContextState } from 'utils/context/PostContextState';

const MyApp = () => {
  
  return (
    <Router history={history} >
      
      <ContextState>
        <PostContextState>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />
            })}
          </Switch>
        </PostContextState>
      </ContextState>
    </Router>
  )
}

export default MyApp;