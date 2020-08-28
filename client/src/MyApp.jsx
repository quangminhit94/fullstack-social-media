import React, { useState, useReducer } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import history from './utils/history';
import indexRoutes from './routes/index.jsx'

const MyApp = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Router history={history} >
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />
            })}
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default MyApp;