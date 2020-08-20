import { createSelector } from "reselect";

const VISIBILITY_FILTER = {
  completed: t => t.completed,
  active: t => !t.completed,
  all: () => true
};

const getTodoSelector = (state, props) => state.todosReducer.todos[props.id];
export const getTodo = createSelector(getTodoSelector, t => t);

const getTodosAsIdsSelector = state =>{
  console.log(state)
  return state.todosReducer.todosAsIds
    .map(id => state.todosReducer.todos[id])
    .filter(VISIBILITY_FILTER[state.visibilityReducer])
    .map(t => t.id);
}
export const getTodosAsIds = createSelector(getTodosAsIdsSelector, t => t);

export const getFilter = state => state.visibilityReducer;

export const getNotifications = state =>
  Object.keys(state.notificationReducer).map(
    key => state.notificationReducer[key]
  );
