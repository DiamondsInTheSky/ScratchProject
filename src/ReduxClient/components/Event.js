import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
  return (
    <div id="event">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.eventId}</p>
      <div>
        <button className="yesbtn" type="button" onClick={() => { }}> yes </button>
        {/* add dispatch to reject event  */}
        <button className="nobtn" type="button" onClick={() => { }}> no </button>
        {/* CREATE INFO PAGE */}
        <button className="infobtn" type="button"><Link to="/info"> info </Link></button>

      </div>
    </div>
  )
};

export default Event;