import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      redirect: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onChange(event) {
    this.setState({ userName: event.target.value });
  }
  onChange2(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password
      })

    }).then(res => res.json())
      .then(response => {
        if (response) {
          this.setState({ redirect: true })
        }
      })
  }

  render() {
    return (
      <div>

        <div id="logincontent">
          <div id="logintitle">MoDo</div>
          <form id="login" onSubmit={this.handleSubmit}>
            <div className="content">
              <h1>User Login</h1>
              <input type="text" placeholder="Your account"></input>
              <input type="password" placeholder="Your password"></input>
              <button className="loginbtn" type='submit' value='Submit'>Login</button>
              <button className="loginbtn">Register</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

module.exports = login;

