import React, { Component } from 'react'
import PropTypes from 'prop-types'
import socketIOClient from "socket.io-client";
import Axios from 'axios'

import UserIcon from "material-ui-icons/People";

class ConcurrentUserNumber extends Component {
  constructor(props) {
    super(props)
    this.state = { userNumber: 0 };
  }

  openWebSocketConnection() {
    const socket = socketIOClient(Axios.defaults.baseURL);
    socket.on("countCurrentUser", ({ count }) => this.setState({ userNumber: count }));
  }

  componentWillMount() {
    this.openWebSocketConnection()
  }

  componentDidMount() {
    
  }
  componentWillReceiveProps(nextProps) {

  }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    const { userNumber } = this.state
    return (
      <span>
        <UserIcon style={{margin: "0 10px", verticalAlign: "middle"}}></UserIcon>
        <b style={{color: "#00acc1"}}>{ userNumber } </b>
      </span>
    )
  }
}

ConcurrentUserNumber.propTypes = {

}

export default ConcurrentUserNumber
