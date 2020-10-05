import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import TodoItem from "./TodoItem";
import Notification from "components_material/Notifications/Notification";
import actions from "store/actions/saga/index";

const TodoList = ({ filter, todosAsIds, onSetFilter }) => {
  const filterStyle = type =>
    filter === type
      ? {
          backgroundColor: "blue",
          color: "white",
          outline: "none"
        }
      : {};
  return (
    <Fragment>
      <ul>{todosAsIds.map(id => <TodoItem id={id} key={id} />)}</ul>
      {
        <Fragment>
          <button onClick={() => onSetFilter("all")} style={filterStyle("all")}>
            All
          </button>
          <button
            onClick={() => onSetFilter("active")}
            style={filterStyle("active")}
          >
            Active
          </button>
          <button
            onClick={() => onSetFilter("completed")}
            style={filterStyle("completed")}
          >
            Completed
          </button>
        </Fragment>
      }
      <Notification />
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { saga_todo_reducer } = state
  const { visibility, todosAsIds, todos} = saga_todo_reducer

  const VISIBILITY_FILTER = {
    completed: t => t.completed,
    active: t => !t.completed,
    all: () => true
  };

  const getTodosAsIds = () => todosAsIds
  
  const getTodoIds = createSelector(getTodosAsIds, ids => ids.map(id => todos[id]))

  const getVisibleTodo = createSelector(getTodoIds, todoIds => todoIds.filter(VISIBILITY_FILTER[visibility]))

  const getMyTodo = createSelector(getVisibleTodo, visibleTodo => visibleTodo.map(t => t.id))

  return {
    todosAsIds: getMyTodo(),
    filter: visibility
  }
};

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => dispatch(actions.doSetFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
