# 1/ React Hooks Intro

Hooks are referring to being able to "hook" react class functionally to a functional component

Main purpose of hooks is to give class functionality to react functional components, mainly to allow functional components to read and update state

This both makes development easier and improves performance

# 2/ 2 rules of using hooks

| 1 no nested hooks call | 2. Do not call hooks outside of the component function |
|---|---|
| **Wrong:** if (true) { useEffect( () => {return value} ) } | null |
| **Right:** useEffect( () => true ? return value : null ) | null |

# 3/ 4 Hooks Overview

| useState() | useEffect() | useContext() | useReducer() |
|--|--|--|--|
| Similar to this.setState() | similar to componentDidMount() | Similar to react-redux | Similar to react-redux |
| Update local component state | Use when you want to call function automatically | Allows you to access and update global context state through the React context API | Similar to react-redux |
| -- | -- | -- | **DOES NOT** update state globally by itself |

# 4/ useState()

| Use State() | Explain |
|--|--|
| const [value, setValue] = useState(initialState) <br> // [state value, set state function] | Variable Names are user defined |
| **Set State:** setValue(value + 1) <br> **Read State:** \<p>{value}\</p> in render method.| **Without Array destructuring:** <br> - const value = useState(0)[0] <br> - const setValue = useState[0][1] |
| Component re-renders automatically when state changes | **Multiple Properties:** <br> - const [value, setValue] = useState(initialState) |

# 5/ useEffect()

| | | |
|--|--|--|
| useEffect( () => {<br> &ensp;&ensp; () => {return value} <br>})| useEffect( () => {<br> &ensp;&ensp; () => {return value} <br>},[]) | useEffect( () => {<br> &ensp;&ensp; () => {return value} <br>},[state.value]) |
| useEffect will be called everytime a component renders | useEffect will be called when the component mounts | useEffect will be called when state.value changes |

# 6/ useReducer()

```js
import * as Reducer from './store/hooks/reducer'
import * as ACTIONS from './store/actions/actions'

const [state, dispatch] = useReducer(Reducer.reduxReducer, Reducer.initialState)
// [value, function]

Regular Action: dispatch(type:"ACTIONS")

Action Creator: (payload) => dispatch(ACTIONS.create_action(payload))

Read State: <p>{ state.state_property }</p> in render method. Same state property that you setup in the initial state, in the reducer.

```

# 7/ What is Context

- Context is separate from React Hooks
- Is a way to pass down props from a parent component to deeply nested child component
- In regular React props can only be passed to a direct child component of a parent component.
- A parent can not pass props to a child of a child component
- Is what allows us to have a global state

# 8/ useContext()

<p style="font-size:14px">In separate context.js file:</p>

```js
const Context = React.createContext({
  props1: false
})

export default Context;
```

<p style="font-size:14px">Import the context in your root App.js file:</p>

```js
import Context from './utils/context'

// Import and setup the actions and reducer here as well. See the useReducer() Syntax guide for more details.
```

# 9/ useContext() const.

Import the Context into a component and initialize it like so:

```js
import Context from '../utils/context'

const context = useContext(Context)
```

After initialing context you can access the global state

**Read State:** `{context.state_prop1}` in render method

**Set State:** `{ () => context.update_state() }` in event handler

**You can update global state through either userReducer() or useState() in App.js

# 10/ Migration Guide from Redux to React hooks

- Actions do not need to be changed at all
- Reducer do not need to changed either
- Simply export both the initial state and reducer instead of just the reducer. Do not use `export default`
- Then pass in both the reducer and initialState to useReducer() hook
- Export and import actions as normal
- Actions are dispatched as normal
