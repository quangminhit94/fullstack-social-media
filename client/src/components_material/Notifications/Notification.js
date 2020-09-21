import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getNotifications } from "store/selectors/index";

const Notification = ({ notificationTodo }) => {
  const notifications = Object.keys(notificationTodo).map(
    key => notificationTodo[key]
  );
  return <Fragment>{notifications.map(note => <div key={note}>{note}</div>)}</Fragment>
};

const mapStateToProps = state => {
  const { saga_todo_reducer } = state
  const { notificationTodo } = saga_todo_reducer
  return {
    notificationTodo: notificationTodo
  }
}

export default connect(mapStateToProps)(Notification);
