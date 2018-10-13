import React, { Component } from 'react';

class register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      facebookURL: '',
      twitterURL: '',
      linkedInURL: '',
      password: '',
      signupSuccess: false,
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({ fName: event.target.value });
  }
  handleChange2(event) {
    this.setState({ lName: event.target.value });
  }
  handleChange3(event) {
    this.setState({ email: event.target.value });
  }
  handleChange4(event) {
    this.setState({ facebookURL: event.target.value });
  }
  handleChange5(event) {
    this.setState({ twitterURL: event.target.value });
  }
  handleChange6(event) {
    this.setState({ linkedInURL: event.target.value });
  }
  handleChange8(event) {
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
        facebookURL: this.state.facebookURL,
        twitterURL: this.state.twitterURL,
        password: this.state.password
      }).then(res => res.json())
        .then(response => {
          if (response) {
            this.setState({ signupSuccess: true })/* To handle logged In User**/
          }
        })

    })
  }


  render() {
    // put render logic here
    const { signupSuccess } = this.state;
    if (signupSuccess) {
      return <Redirect to='/login' />;
    }
    return (
      <div id="signupcontent">
        <form id="signupform">
          <div>
            <h1>Sign up for free</h1>
            <label>First Name:</label>
            <input id="signupfname" type="text" placeholder="(required)" value={this.state.fName} onChange={this.handleChange1} ></input>
            <label>Last Name:</label>
            <input id="signuplname" type="text" placeholder="(required)" value={this.state.lName} onChange={this.handleChange2} ></input>
            <label>Facebook URL:</label>
            <input type="text" value={this.state.facebookURL} onChange={this.handleChange4} ></input>
            <label>Twitter URL:</label>
            <input type="text" value={this.state.twitterURL} onChange={this.handleChange5} ></input>
            <label>Linkedin URL:</label>
            <input type="text" value={this.state.linkedInURL} onChange={this.handleChange6} ></input>

            <label>Email:</label>
            <input id="signupemail" type="text" placeholder="(required)" value={this.state.email} onChange={this.handleChange3} ></input>
            <label>Password:</label>
            <input id="signuppassword" type="password" placeholder="(required)" value={this.state.password} onChange={this.handleChange8} ></input>
            <button id="signupbtn">Sign-up with MoDo</button>
          </div>
        </form>
      </div>

    );
  }

}

module.exports = register;
