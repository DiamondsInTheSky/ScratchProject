import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';

const login = (props) => {
  const { register } = this.state;  //<== needs to point to store
  const { isLoggedin } = this.state // <== needs to point to store
  if (register) return <Redirect to={`/register`} />;
  if (isLoggedin) return <Redirect to={`/profile/${this.state.userName}`} />;
  return (
    <div>
      <div id="logincontent">
        <div id="logintitle">MoDo</div>
          {/* this needs to point to a dispatcher*/}
          <form id="login" onSubmit={this.handleSubmit}> 
          <div className="content">
            <h1>User Login</h1>
            <input type="text" placeholder="Email Address" onChange={this.onChange} />
            <input type="password" placeholder="Password" onChange={this.onChange2} />
            <button className="loginbtn" type='submit' value='Submit'>Login</button>
            {/* this needs to point to a dispatcher */}
            <button className="registerbtn" type="button" onClick={() => this.setState({ register: true })}>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

module.exports = login;

