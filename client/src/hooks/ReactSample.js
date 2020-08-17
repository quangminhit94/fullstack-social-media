
import React, {useReducer} from 'react'
import { Link } from 'react-router-dom'

import { Router,Route, 
  Switch, 
  Redirect} from 'react-router'

import Form1 from '../containers/Form1';
import Component1 from '../functional/Component1';
import HooksContainer from '../hooks/HooksContainer'
import HooksForm from '../hooks/HooksForm'

const ReactSample = ({match}) => {
  
  return (
    <div>
      <h1>React Sample</h1>
      <ul>
        <li>
          <Link to={`${match.url}/component1`} style={{ padding: '5px' }}>
          Component 1
          </Link>
        <Link to={`${match.url}/form1`} style={{ padding: '5px' }}>
          Form 1
          </Link>
        <Link to={`${match.url}/hooks`} style={{ padding: '5px' }}>
          Hooks
          </Link>
        <Link to={`${match.url}/hooks_form`} style={{ padding: '5px' }}>
          Hooks Form
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={match.path} >
          select a path
        </Route>
        <Route path={`${match.path}/component1`} component={Component1}/>
        <Route path={`${match.path}/form1`} component={Form1}/>
        <Route path={`${match.path}/hooks`} component={HooksContainer}/>
        <Route path={`${match.path}/hooks_form`} component={HooksForm}/>
      </Switch>
    </div>
  )
}

export default ReactSample