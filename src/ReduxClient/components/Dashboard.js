import React from 'react';
import { Link } from 'react-router-dom';
import Event from './Event';

const Dashboard = (props) => {
  const { events } = props;  //<== events should be an array with all user events
  const eventComponents = events.map((event) => {
    return (
      <Event
        title={event.title}
        description={event.description}
        eventId={event.id}
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