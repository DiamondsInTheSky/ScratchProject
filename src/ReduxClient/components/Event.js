import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
  console.log(props.userId, props.eventId);
  const yesStatus = {
    userid: props.userId,
    eventid: props.eventId,
    status: 'yes'
  }
  const noStatus = {
    userid: props.userId,
    eventid: props.eventId,
    status: 'no'
  }
  return (
    <div id="event">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.eventId}</p>
      <div>
        <button className="yesbtn" type="button" onClick={() => {props.changeStatusHandler(yesStatus)}}>yes</button>
        {/* add dispatch to reject event  */}
        <button className="nobtn" type="button" onClick={() => {props.changeStatusHandler(noStatus)}}> no </button>
        {/* CREATE INFO PAGE */}
        <button className="infobtn" type="button"><Link to={{pathname: "/info", state: {eventId: props.eventId}}}>info</Link></button>

      </div>
    </div>
  )
};

export default Event;