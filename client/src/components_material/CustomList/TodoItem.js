import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import actions from "store/actions/saga/index";
import { getTodo } from "store/selectors/index";

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => (
  <div style={{ padding: 12, width: "50%" }}>
    <span
      onClick={() => onToggleTodo(todo.id)}
      style={{
        fontSize: 24,
        padding: 24,
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : ""
      }}
    >
      {todo.name}
    </span>
    <button
      onClick={() => onDeleteTodo(todo.id)}
      style={{
        cursor: "pointer",
        color: "white",
        backgroundColor: "red",
        fontSize: 20,
        borderRadius: 2.5,
        borderBottomStyle: "double",
        borderWidth: 5,
        borderColor: "#333"
      }}
    >
      &times;
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  const { saga_todo_reducer } = state
  const { todos } = saga_todo_reducer

  return {
    todo: todos[props.id]
  }
}

const mapDispatchToProps = dispatch => ({
  onToggleTodo: id => dispatch(actions.doToggleTodo(id)),
  onDeleteTodo: id => dispatch(actions.doDeleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
