import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

const Register = (props) => {
  // this component needs to susbscribe to the store
  const { signupSuccess } = this.state; // <== this needs to point to store.
  if (signupSuccess) return <Redirect to='/profileCard' user={this.state.email}/>;
  return (
    <div id="signupcontent">
      <div id="logintitle">MoDo</div>
      <form id="signupform" onSubmit={this.handleSubmit}>
        <div>
          <h1>Sign up for free</h1>
          <label>First Name:</label>
          <input 
            id="signupfname" 
            type="text" 
            placeholder="(required)" 
            value={this.state.fName} 
            onChange={this.handleChangeFirstName} 
          />
          <label>Last Name:</label>
          <input 
            id="signuplname" 
            ype="text" 
            placeholder="(required)" 
            value={this.state.lName} 
            onChange={this.handleChangeLastName} 
          />
          <label>Facebook URL:</label>
          <input 
            type="text" 
            value={this.state.facebookURL} 
            onChange={this.handleChangeFacebook} 
          />
          <label>Twitter URL:</label>
          <input 
            type="text" 
            value={this.state.twitterURL}
            onChange={this.handleChangeTwitter}
          />
          <label>Linkedin URL:</label>
          <input 
            type="text" 
            value={this.state.linkedInURL} 
            onChange={this.handleChangeLinkedin} 
          />
          <label>Github URL:</label>
          <input 
            type="text" 
            value={this.state.githubURL} 
            onChange={this.handleChangeGithub} 
          />
          <label>Email:</label>
          <input 
            id="signupemail" 
            type="text" 
            placeholder="(required)" 
            value={this.state.email} 
            onChange={this.handleChangeEmail} 
          />
          <label>Password:</label>
          <input 
            id="signuppassword" 
            type="password" 
            placeholder="(required)" 
            value={this.state.password} 
            onChange={this.handleChangePassword}
          />
          <button id="signupbtn">Sign-up with MoDo</button>
        </div>
      </form>
      <button className="registerbtn">Back to Log In</button>
    </div>
  );
}

module.exports = Register;
