import React, { Component } from 'react';

// import UserList from './UserList';

const Info = (props) => {
  <div>
    <button onClick={props.title}>Title</button>
    <button onClick={props.description}>Description</button>
    <button onClick={props.attendees}>Attendees</button>
  </div>
}


export default Info;