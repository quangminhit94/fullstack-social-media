import React from "react";
import { connect } from "react-redux";
import v4 from "uuid/dist/v4";

import actions from "../../store/actions/saga/index";
import ErrorBoundary from "./ErrorBoundary";

class TodoInput extends React.Component {
  state = {
    value: ""
  };

  onInputChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === "") return;
    this.props.addTodo(v4(), this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <ErrorBoundary>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onInputChange} />
          <button type="submit">Add</button>
        </form>
      </ErrorBoundary>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (id, name) => dispatch(actions.doAddTodoWithNotification(id, name))
});

export default connect(null, mapDispatchToProps)(TodoInput);
