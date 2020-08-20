import React, { Fragment } from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem";
import Notification from "./Notification";
import actions from "../../store/actions/saga/index";
import { getTodosAsIds, getFilter } from "../../store/selectors/index";

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

const mapStateToProps = state => ({
  todosAsIds: getTodosAsIds(state),
  filter: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => dispatch(actions.doSetFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
