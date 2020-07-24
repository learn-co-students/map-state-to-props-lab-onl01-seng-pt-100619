import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
  const users = this.props.users.map((user,index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          {users}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // debugger
  return {
    users: state.users,
    userCount: state.users.length
  }
  //return value: the value of the props that are added to the App component
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
