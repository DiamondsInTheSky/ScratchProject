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
const invitedUsers = props.invitedUser.map( user => {
  return (<p> {user.username} </p>)
}) 

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
      <h2> Invitees</h2>
      {invitedUsers}
      <UserList userList={userList}/> 

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
module.exports = AddEvent;
