import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

class register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      githubURL: '',
      facebookURL: '',
      twitterURL: '',
      linkedInURL: '',
      password: '',
      signupSuccess: false,
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeGithub = this.handleChangeGithub.bind(this);
    this.handleChangeFacebook = this.handleChangeFacebook.bind(this);
    this.handleChangeTwitter = this.handleChangeTwitter.bind(this);
    this.handleChangeLinkedin = this.handleChangeLinkedin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(event) {
    this.setState({ fName: event.target.value });
  }
  handleChangeLastName(event) {
    this.setState({ lName: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeGithub(event) {
    this.setState({ githubURL: event.target.value });
  }
  handleChangeFacebook(event) {
    this.setState({ facebookURL: event.target.value });
  }
  handleChangeTwitter(event) {
    this.setState({ twitterURL: event.target.value });
  }
  handleChangeLinkedin(event) {
    this.setState({ linkedInURL: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email, /**Email is also being used as sign in username */
        githubURL: this.state.githubURL,
        linkedInURL: this.state.linkedInURL,
        facebookURL: this.state.facebookURL,
        twitterURL: this.state.twitterURL,
        password: this.state.password
      })
<<<<<<< HEAD

    }).then(res => res.json())
      .then(response => {
        if (response) {
          this.setState({ signupSuccess: true })/* To handle logged In User**/
        }
      })
=======
    }).then(res => res.json())
        .then(response => {
          if (response) {
            this.setState({ signupSuccess: true })/* To handle logged In User**/
          }
        })
>>>>>>> 42014cb6dd15136d5093d33ca3f3de973ce2ac8b
  }


  render() {
    // put render logic here
    const { signupSuccess } = this.state;
    if (signupSuccess) {
      return <Redirect to='/profileCard' user={this.state.email}/>;
    }
    return (
      <div id="signupcontent">
<<<<<<< HEAD
        <div id="logintitle">MoDo</div>
=======
>>>>>>> 42014cb6dd15136d5093d33ca3f3de973ce2ac8b
        <form id="signupform" onSubmit={this.handleSubmit}>
          <div>
            <h1>Sign up for free</h1>

            <label>Email:</label>
            <input id="signupemail" type="text" placeholder="(required)" value={this.state.email} onChange={this.handleChange3} ></input>
            <label>Password:</label>
            <input id="signuppassword" type="password" placeholder="(required)" value={this.state.password} onChange={this.handleChange8} ></input>
            <label>First Name:</label>
            <input id="signupfname" type="text" placeholder="(required)" value={this.state.fName} onChange={this.handleChangeFirstName} ></input>
            <label>Last Name:</label>
            <input id="signuplname" type="text" placeholder="(required)" value={this.state.lName} onChange={this.handleChangeLastName} ></input>
            <label>Facebook URL:</label>
            <input type="text" value={this.state.facebookURL} onChange={this.handleChangeFacebook} ></input>
            <label>Twitter URL:</label>
            <input type="text" value={this.state.twitterURL} onChange={this.handleChangeTwitter} ></input>
            <label>Linkedin URL:</label>
<<<<<<< HEAD
            <input type="text" value={this.state.linkedInURL} onChange={this.handleChangeLinkedin} ></input>
            <label>Github URL:</label>
            <input type="text" value={this.state.githubURL} onChange={this.handleChangeGithub} ></input>
            <label>Email:</label>
            <input id="signupemail" type="text" placeholder="(required)" value={this.state.email} onChange={this.handleChangeEmail} ></input>
            <label>Password:</label>
            <input id="signuppassword" type="password" placeholder="(required)" value={this.state.password} onChange={this.handleChangePassword} ></input>
=======
            <input type="text" value={this.state.linkedInURL} onChange={this.handleChange6} ></input>

>>>>>>> 42014cb6dd15136d5093d33ca3f3de973ce2ac8b
            <button id="signupbtn">Sign-up with MoDo</button>
            <button className="registerbtn">Back to Log In</button>
          </div>
        </form>
      </div>

    );
  }

}

module.exports = register;
