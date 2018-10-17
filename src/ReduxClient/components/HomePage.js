import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapStateToProps = (store) => ({
  eventsArr: store.posts.eventsArr,
  user: store.posts.user
});
const mapDispatchToProps = (dispatch) => {

  return {
    fetchData: (username) => dispatch(actions.getUserInfo(username)),
    changeStatus: (obj) => dispatch(actions.changeStatus(obj))
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
  render() {
    return (
      <div className="wrapper">
        <ProfileCard />
        <button><Link to='/AddEvent'> Add an event</Link></button>
        <Dashboard user={this.props.user} changeStatusHandler = {this.props.changeStatus} events={this.props.eventsArr}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);