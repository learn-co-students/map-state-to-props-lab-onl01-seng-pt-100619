import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  renderUsers = () => (
    this.props.users.map((u, index) => (
      <li key={index}>
        <h3>{u.username}</h3>
        <h4>{u.hometown}</h4>
      </li>
    ))
  )

  render() {
    return (
      <div>
        {`${this.props.count} users:`}
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = ( {users} ) => {
  debugger;
  return { 
    users,
    count: users.length
  }
}

// const mapStateToProps = (({ users }) => ({ users, count: users.length }))

// connect this component to Redux
export default connect(mapStateToProps)(Users)
