import React, { Fragment } from "react";

// import TodoInput from "./SagaTodoChild/TodoInput";
import TodoInput from "components_material/CustomInput/TodoInput";
// import TodoList from "./SagaTodoChild/TodoList";
import TodoList from "components_material/CustomList/TodoList";

const SagaTodo = ({ todos }) => (
  <Fragment>
    <h1>Todo App {"\u2728"}</h1>
    <TodoInput />
    <TodoList />
  </Fragment>
);

export default SagaTodo;
