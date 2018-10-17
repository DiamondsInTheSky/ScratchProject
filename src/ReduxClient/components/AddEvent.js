import React, { Component } from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import { Link } from 'react-router-dom';
// link to store to grab user array
// pass down dispatch of ADD_USER_TO_EVENT to <UserList>
// pass invitedUser array
const mapStateToProps = (store) => ({
  invitedUser: store.posts.invitedUsers,
  userList: store.posts.userArr,
  user: store.posts.user
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (obj) => dispatch(actions.addUserToEvent(obj)),
  getUserList: () => dispatch(actions.getUserList()),
  createEvent: (obj) => dispatch(actions.postEvent(obj))
})

class AddEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
    }
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onDescriptionChangeHandler = this.onDescriptionChangeHandler.bind(this);
  }
  onTitleChangeHandler(event) {
    this.setState({title: event.target.value})

  }
  onDescriptionChangeHandler(event) {
    this.setState({description: event.target.value})

  }
  componentDidMount() {
    this.props.getUserList();
    const userObj = {
      userid: this.props.user.id,
      userName: this.props.user.firstname
    }
    this.props.invitedUser.push(userObj);
  }
  render() {
    const mergedObj = {
      uid: this.props.user.id,
      title: this.state.title,
      description: this.state.description,
      invitedUsers: this.props.invitedUser
    };
    console.log("mergedobj",mergedObj);
    const invitedUsers = this.props.invitedUser.map( user => {
      return (<p> {user.userName} </p>)
    }) 
    const pathUrl = '/profile/' + this.props.user.email
    return (
      <div>
      {/* add dispatch to create event */}
      <form id="addEvent">
        <div>
          <h1>New Event</h1>
          <label>title</label>
          <input
            id="eventTitle"
            type="text"
            placeholder="(required)"
            value= {this.state.title}
            onChange={this.onTitleChangeHandler} 
          />
          <label>description</label>
          <textarea
            id="eventDescription"
            type="text"
            placeholder="(required)"
            value= {this.state.description}
            onChange={this.onDescriptionChangeHandler}
          />
        </div>
      </form>
      <button onClick={() => {this.props.createEvent(mergedObj)}} className="registerbtn">create event</button>

      <h2> Invitees</h2>
      {invitedUsers}
      <h2> Invite some people!</h2>
      <UserList addUser = {this.props.addUser} userList={this.props.userList}/> 

    </div>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
