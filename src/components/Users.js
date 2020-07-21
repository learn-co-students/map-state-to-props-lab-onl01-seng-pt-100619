import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return(<li>
              {user.username}
              
            </li>
          )})}
            
            <p>{this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log('state in users component:')
  console.log(state)
  return {users: state.users,
  userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
