import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class profileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
      profile: {},
      groups: {}
    };


  }

  componentDidMount() {
    fetch(`http://localhost:3000/profile/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // this data is everything you need, take out the alert if you recieve it
        this.setState({ profile: data })
      })
      .catch(err => console.log(err));
  }


  render() {
    console.log(this.state.profile)
    return (
      <div id="userprofileouter">
        <div id="userprofile">
          <div id="userprofileleft">
            <i id="avatar" className="fas fa-user"></i>
            <div id="userinfo">
              <p id="username">{this.state.profile.lastname + ', '}{this.state.profile.firstname}</p>
              <p id="useremail">{this.state.profile.email}</p>
            </div>
          </div>
        </div>
  </div>
        )
      }
    }
    
    module.exports = profileCard;
