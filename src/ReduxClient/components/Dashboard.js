import React from 'react';
import { Link } from 'react-router-dom';
import Event from './Event';

const Dashboard = (props) => {
  const { events } = props; 
  console.log(props.user.id); //<== events should be an array with all user events
  const eventComponents = events.map((event) => {
    console.log(event.id, props.user.id);
    return (
      <Event
        title={event.title}
        description={event.description}
        eventId={event.id}
        changeStatusHandler = {props.changeStatusHandler}
        userId = {props.user.id}
      />
    );
  });
  return (
    <div class="flex-container">
      {eventComponents}
    </div>
  );
}

export default Dashboard