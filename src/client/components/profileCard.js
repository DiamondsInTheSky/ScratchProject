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
<<<<<<< HEAD
||||||| merged common ancestors

              <a href={this.state.profile.facebook} target="_blank"><svg aria-hidden="true" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="smicon svg-inline--fa fa-facebook-square fa-w-14 fa-3x"><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z" className=""></path></svg></a>
              <a href={this.state.profile.twitter}  target="_blank"><svg aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="smicon svg-inline--fa fa-twitter fa-w-16 fa-3x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" className=""></path></svg></a>
              <a href={this.state.profile.linkedin} target="_blank"><svg aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="smicon svg-inline--fa fa-linkedin-in fa-w-14 fa-3x"><path fill="currentColor" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z" className=""></path></svg></a>
            </div>
          </div>
          <div id="userprofileright">
            <div id="buttonlist">
              <button id="contact_count" className="featurebtn btnactive">
                <div className="bignum">20</div>
                <h2>Contacts</h2>
              </button>
              <button id="group_count" className="featurebtn">
                <div className="bignum">8</div>
                <h2>Groups</h2>
              </button>
              <button id="addnewcontact" className="featurebtn">
                <div>+</div></button>
            </div>
            <div id="grouplist">
              <button className="groupbutton">Cohort 19</button>
              <button className="groupbutton">Cohort 22</button>
              <button className="groupbutton">Cohort 23</button>
              <button className="groupbutton">Cohort 24</button>
              <button className="groupbutton">Cohort 25</button>
              <button className="groupbutton">Cohort 26</button>
=======
            </div>
          </div>
          <div id="userprofileright">
            <div id="buttonlist">
              
                <h2>Events</h2>
              <button id="addnewcontact" className="featurebtn">
                +</button>
>>>>>>> e052016a813ea596d17a67eefbcf46d38e9502a1
            </div>
              
              </div>
              </div>
              </div>)
      }
    }
    
    module.exports = profileCard;
