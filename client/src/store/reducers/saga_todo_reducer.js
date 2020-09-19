import v4 from "uuid/dist/v4";
import { schema, normalize } from "normalizr";

import types from "../actions/saga/types";

const todosInitial = [
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
]

const todoSchema = new schema.Entity("todos");
const normalizedTodos = normalize(todosInitial, [todoSchema]);

const initialState = {
  todos: normalizedTodos.entities.todos,
  todosAsIds: normalizedTodos.result,
  visibility: 'all',
  notificationTodo: {}
}

const SagaTodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO: {
      const todo = {
        id: payload.id,
        name: payload.name,
        completed: false
      };
      const todos = {
        ...state.todos,
        [todo.id]: todo
      };
      const notificationTodo = {
        [todo.id]: 'Todo Created: ' + todo.name
      }
      return {
        ...state,
        todos,
        todosAsIds: [...state.todosAsIds, todo.id],
        notificationTodo: notificationTodo
      }
    }
    case types.TOGGLE_TODO: {
      const { id } = payload;
      console.log(state.todos[id])
      const toggledTodo = {
        ...state.todos[id],
        completed: !state.todos[id].completed
      };
      const todos = {
        ...state.todos,
        [id]: toggledTodo
      };
      const notificationTodo = {
        [toggledTodo.id]: 'Todo Toggle: ' + toggledTodo.name
      }
      return {
        ...state,
        todos,
        notificationTodo: notificationTodo
      };
    }
    case types.DELETE_TODO: {
      const { id } = payload;
      const todosAsIds = state.todosAsIds.filter(todoId => todoId !== id);
      const todos = {};
      const notificationTodo = {
        [id]: 'Todo was remove: ' + state.todos[id].name
      }
      todosAsIds.forEach(id => {
        todos[id] = state.todos[id];
      });
      return {
        ...state,
        todos: todos,
        todosAsIds: todosAsIds,
        notificationTodo: notificationTodo
      };
    }
    case types.SET_FILTER:
     return {
       ...state,
       visibility: payload.filter
     };
    case types.HIDE_NOTIFICATION: 
      return {
        ...state,
        notificationTodo: {}
      };
    default:
      return state;
  }
};

export default SagaTodoReducer;