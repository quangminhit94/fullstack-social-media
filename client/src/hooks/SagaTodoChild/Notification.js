import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getNotifications } from "../../store/selectors/index";

const Notification = ({ notifications }) => (
  <Fragment>{notifications.map(note => <div key={note}>{note}</div>)}</Fragment>
);

const mapStateToProps = state => ({
  notifications: getNotifications(state)
});

export default connect(mapStateToProps)(Notification);
