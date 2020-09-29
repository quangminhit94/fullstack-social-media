import React, { Component } from 'react'
import PropTypes from 'prop-types'
import socketIOClient from "socket.io-client";
import Axios from 'axios'

import UserIcon from "material-ui-icons/People";
let socket = null
class ConcurrentUserNumber extends Component {
  constructor(props) {
    super(props)
    this.state = { userNumber: 0 };
    // if(!socket) {
      socket = socketIOClient(Axios.defaults.baseURL)
    // }
    // this.socket = socketIOClient(Axios.defaults.baseURL);
  }

  openWebSocketConnection() {
    socket.on("countCurrentUser", ({ count }) => this.setState({ userNumber: count }));
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    this.openWebSocketConnection()
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
    socket.disconnect()
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
