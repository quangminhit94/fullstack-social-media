import React, { useState, useReducer } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import history from './utils/history/history';
import indexRoutes from './routes/index.jsx'

import ContextState from './context_state_config';

const MyApp = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Router history={history} >
          
          <ContextState>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />
              })}
            </Switch>
          </ContextState>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default MyApp;