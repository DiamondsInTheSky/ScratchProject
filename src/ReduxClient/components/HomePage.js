import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = (store) => ({
  eventsArr: store.posts.eventsArr
});
const mapDispatchToProps = (dispatch) => {

  return {
    fetchData: (username) => dispatch(actions.getUserInfo(username)),
  }
}

class HomePage extends Component {
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log(this.props.match.params.username)
    console.log('Before I mount');
    this.props.fetchData(this.props.match.params.username);
  }
  // this should invoke a dispatcher that handles the fetch request
  // componentDidMount() {
  //   fetch(`http://localhost:3000/profile/${this.props.match.params.username}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ profile: data })
  //     })
  //     .catch(err => console.log(err));
  // };
  render() {
    return (
      <div>
        <ProfileCard />
        <button><Link to='/AddEvent'> Add an event</Link></button>
        <Dashboard events={this.props.eventsArr}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);