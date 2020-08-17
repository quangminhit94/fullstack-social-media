import React, { useState, useReducer } from 'react'

import ContextState from './context_state_config';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import history from './utils/history';
const AppHooks = () => {
  
  return (
    <div>
      React
      <BrowserRouter>
      
      <Router history={history} >

        <ContextState />
      </Router>
      </BrowserRouter>
    </div>
  )
}

export default AppHooks;