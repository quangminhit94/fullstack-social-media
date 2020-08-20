import v4 from "uuid/dist/v4";
import { schema, normalize } from "normalizr";

import types from "../actions/saga/types";

const todos = [
  {
    id: v4(),
    name: "Learn Swift",
    completed: false
  },
  {
    id: v4(),
    name: "Learn React",
    completed: true
  }
];

const todoSchema = new schema.Entity("todos");
const normalizedTodos = normalize(todos, [todoSchema]);

const initialState = {
  todos: normalizedTodos.entities.todos,
  todosAsIds: normalizedTodos.result
};

const applyAddTodo = (state, action) => {
  const todo = {
    id: action.payload.id,
    name: action.payload.name,
    completed: false
  };
  const todos = {
    ...state.todos,
    [todo.id]: todo
  };
  return {
    ...state,
    todos,
    todosAsIds: [...state.todosAsIds, todo.id]
  };
};

const applyToggleTodo = (state, action) => {
  const { id } = action.payload;
  const toggledTodo = {
    ...state.todos[id],
    completed: !state.todos[id].completed
  };
  const todos = {
    ...state.todos,
    [id]: toggledTodo
  };
  return {
    ...state,
    todos
  };
};

const applyDeleteTodo = (state, action) => {
  const { id } = action.payload;
  const todosAsIds = state.todosAsIds.filter(todoId => todoId !== id);
  let todos = {};
  todosAsIds.forEach(id => {
    todos[id] = state.todos[id];
  });
  return {
    ...state,
    todos,
    todosAsIds
  };
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return applyAddTodo(state, action);
    case types.TOGGLE_TODO:
      return applyToggleTodo(state, action);
    case types.DELETE_TODO:
      return applyDeleteTodo(state, action);
    default:
      return state;
  }
};

export default todosReducer;
