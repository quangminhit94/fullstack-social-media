import React, { useState, useReducer } from 'react'

import ContextState from './context_state_config';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import history from './utils/history/history';
import Route1 from './Routes1'
const AppHooks = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Router history={history} >
          <ContextState>
            <Route1 />
          </ContextState>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default AppHooks;