import React, { Fragment } from "react";

import TodoInput from "./SagaTodoChild/TodoInput";
import TodoList from "./SagaTodoChild/TodoList";

const SagaTodo = ({ todos }) => (
  <Fragment>
    <h1>Todo App {"\u2728"}</h1>
    <TodoInput />
    <TodoList />
  </Fragment>
);

export default SagaTodo;
