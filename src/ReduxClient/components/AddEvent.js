import React from 'react';
import UserList from './UserList';

const AddEvent = (props) => {
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
            value={this.state.fName} 
            onChange={handleChangeFirstName} 
          />
          <label>description</label>
          <textarea
            id="eventDescription"
            type="text"
            placeholder="(required)"
            value={this.state.lName}
            onChange={handleChangeLastName}
          />
        </div>
      </form>
      <button type="submit" className="registerbtn">Back to Log In</button>
      <UserList />
    </div>
  );
};

module.exports = AddEvent;
