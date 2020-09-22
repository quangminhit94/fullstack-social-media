import React, { Fragment } from "react";

// import TodoInput from "./SagaTodoChild/TodoInput";
import TodoInput from "components_material/CustomInput/TodoInput";
// import TodoList from "./SagaTodoChild/TodoList";
import TodoList from "components_material/CustomList/TodoList";
import BootstrapWrapper from 'HOC/BootstrapWrapper'

const SagaTodo = ({ todos }) => (
  <Fragment>
    <h1>Todo App {"\u2728"}</h1>
    <TodoInput />
    <TodoList />
  </Fragment>
);

export default BootstrapWrapper(SagaTodo);
