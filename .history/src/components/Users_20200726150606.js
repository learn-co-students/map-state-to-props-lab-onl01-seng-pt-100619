import React, { Component } from 'react';
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    
    return (
      <div>
        <ul>
          Users!
          {users}
          {this.props.numberOfUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};

// connect this component to Redux
export default connect(mapStateToProps) (Users);

