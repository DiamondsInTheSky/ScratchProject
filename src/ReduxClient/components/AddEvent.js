import React, { Component } from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';

// link to store to grab user array
// pass down dispatch of ADD_USER_TO_EVENT to <UserList>
// pass invitedUser array
const mapStateToProps = (store) => ({
  invitedUser: store.posts.invitedUsers
})



const AddEvent = (props) => {
<<<<<<< HEAD
  const linkTo = '/profile/' + props.user.username;
||||||| merged common ancestors
=======
const invitedUsers = props.invitedUser.map( user => {
  return (<p> {user.username} </p>)
}) 

>>>>>>> master
  return (
    <div>
      {/* add dispatch to create event */}
      <form id="addEvent" onSubmit={() => { }}>
        <div>
          <h1>New Event</h1>
          <label>title</label>
          <input
            id="eventTitle"
            type="text"
            placeholder="(required)"
            value= ''
            onChange={() => {}} 
          />
          <label>description</label>
          <textarea
            id="eventDescription"
            type="text"
            placeholder="(required)"
            value= ''
            onChange={() => {}}
          />
        </div>
      <button type="submit" className="registerbtn">create event</button>
      </form>
<<<<<<< HEAD
      <button type="submit" className="registerbtn"><Link to={linkTo} >Create Event</Link></button>
      <UserList />
||||||| merged common ancestors
      <button type="submit" className="registerbtn">Back to Log In</button>
      <UserList />
=======
      <h2> Invitees</h2>
      {invitedUsers}
      <UserList userList={userList}/> 

>>>>>>> master
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
module.exports = AddEvent;
