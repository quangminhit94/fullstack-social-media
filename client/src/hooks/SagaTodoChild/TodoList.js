import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import TodoItem from "./TodoItem";
import Notification from "./Notification";
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
  const { visibility, todosAsIds} = saga_todo_reducer

  const VISIBILITY_FILTER = {
    completed: t => t.completed,
    active: t => !t.completed,
    all: () => true
  };
  const getTodosAsIdsSelector = state =>{
    
    return state.todosAsIds
      .map(id => {
        console.log('id', id);
        return state.todos[id]
      })
      .filter(_ => {
        console.log('VISIBILITY_FILTER[state.visibility]', VISIBILITY_FILTER[state.visibility])
        return VISIBILITY_FILTER[state.visibility]
      })
      .map(t => t.id);
    // return state.todosAsIds
    //   .map(id => state.todos[id])
    //   .filter(VISIBILITY_FILTER[state.visibility])
    //   .map(t => t.id);
  }
  const getTodosAsIds = createSelector(getTodosAsIdsSelector, t => t);

  return {
    todosAsIds: getTodosAsIds(saga_todo_reducer),
    filter: visibility
  }
};

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => dispatch(actions.doSetFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
