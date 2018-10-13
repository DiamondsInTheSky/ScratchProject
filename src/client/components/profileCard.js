import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class profileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
      profile: {
        lastname: '',
        firstname: '',
        email: '', 
        github: '',
        linkedIn: '',
        facebook: '', 
        twitter: '',
        },
    };


  }

  componentDidMount() {
    fetch(`http://localhost:3000/profile/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(data => {
        alert(data)// this data is everything you need, take out the alert if you recieve it
        this.setState({profile: data})
      })
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div id="userprofile">
        <div id="userprofileleft">
          <div id="profilestrip">
            <div id="userphoto"></div>
            <div id="userinfo">
              <p id="username">User Name</p>
              <p id="useremail">User@Email</p>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div id="userprofileright">
          <div className="test">

            <button id="group_count" className="featurebtn">
              <div className="bignum">8</div>
              <h2>Groups</h2>
            </button>

            <button id="addnewcontactbtn">+</button>
          </div>
          <div>
            <button className="groupbutton">Cohort 24</button>
            <button className="groupbutton">Cohort 25</button>
          </div>
        </div>
      </div>
    
    );
  }
}

module.exports = profileCard;
