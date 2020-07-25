import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <h1>Users!</h1>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          <ul>
            {this.props.users.map(user => {return (
              <li>{user.username} from {user.hometown}</li>
            )})}
          </ul>
          {/* In addition, display the total number of users curently in the store */}
          <h3>Current users: {this.props.total}</h3>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  return {users: state.users, total: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

