import React, {useContext} from 'react'
import * as Reducer from '../store/hooks_state/user_input_hooks_reducer'
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context'

const Login = () => {
  
  const context = useContext(Context)
  
  return (
    <div>
      <form onSubmit={context.loginSubmit}>
        <input 
          type="text" placeholder="Input Email"
          id="email" onChange={context.emailHandleChange}/><br/>
        <input type="password" placeholder="Input password"
          id="password"
          onChange={context.pwdHandleChange}/><br/>
        <button type="submit">Login</button>

        <br/>
        {context.userState.email ? <p>{context.userState.email}</p> : ""}
        {context.userState.password ? <p>{context.userState.password}</p> : ""}
      </form>
    </div>
  )
}

export default Login