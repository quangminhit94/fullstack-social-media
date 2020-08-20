import types from "./types";

const doAddTodoWithNotification = (id, name) => ({
  type: types.TODO_ADD_WITH_NOTIFICATION,
  payload: {
    id,
    name
  }
});

const doAddTodo = (id, name) => ({
  type: types.ADD_TODO,
  payload: {
    id,
    name
  }
});

const doToggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: {
    id
  }
});

const doDeleteTodo = id => ({
  type: types.DELETE_TODO,
  payload: {
    id
  }
});

const doSetFilter = filter => ({
  type: types.SET_FILTER,
  payload: {
    filter
  }
});

const doHideNotification = id => ({
  type: types.HIDE_NOTIFICATION,
  payload: { id }
});

export default {
  doAddTodo,
  doToggleTodo,
  doDeleteTodo,
  doSetFilter,
  doHideNotification,
  doAddTodoWithNotification
};
