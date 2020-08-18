import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUsers} from '../store/actions/thunk_actions';

class ThunkComponent extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser({id, name, email}) {
    return (
      <li className="list-group-item" key={id}>
          <div className="col-12">
            {name}
            <button className="btn btn-info float-right" href={email}>{email}</button>
        </div>
      </li>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-12">
        <h4>Email Directory</h4>
        <ul className="list-group">
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.thunk_users
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUsers: () => dispatch(fetchUsers())
})
export default connect(mapStateToProps, mapDispatchToProps)(ThunkComponent);
