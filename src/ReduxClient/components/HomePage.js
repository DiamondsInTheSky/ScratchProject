import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Dashboard from './Dashboard';

const HomePage = (props) => {
  // this should invoke a dispatcher that handles the fetch request
  componentDidMount() {
    fetch(`http://localhost:3000/profile/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ profile: data })
      })
      .catch(err => console.log(err));
  };
  return(
    <div>
      {ProfileCard}
      <button><Link to='/AddEvent'> Add an event</Link></button>
      {Dashboard}
    </div>
  )
}

module.exports= HomePage