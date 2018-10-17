import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

const Dashboard = (props) => {
  console.log(props)
  const { events } = props;  //<== events should be an array with all user events
  const eventComponents = events.map((event) => {
    // componentDidMount() {
    //   fetch(`http://localhost:3000/profile/${this.props.match.params.username}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({ profile: data })
    //     })
    //     .catch(err => console.log(err));
    // };
    return (
    <div>
      {/* <Event 
        title={event.title}
        description={event.description}
        eventId={event.id}
      /> */}
      Hello Im gonna be an event.
      {/* add dispatch to confirm event */}
      <button type="button" onClick={() => { }}> yes </button>
      {/* add dispatch to reject event  */}
      <button type="button" onClick={() => { }}> no </button>
      {/* CREATE INFO PAGE */}
      <button type="button"><Link to="/info"> info </Link></button>
    </div>
    );
  });
  return (eventComponents);
}

module.exports = Dashboard
