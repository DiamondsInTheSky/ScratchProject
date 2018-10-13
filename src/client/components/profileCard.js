import React, { Component } from 'react';

class profileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      githubURL: '',
      linkedinURL: '',
      facebookURL: '',
      twitterURL: '',
    }

  }
componentDidMount() {
  

  const userData = new Request('http://localhost:3000/getUser/', {
)

  fetch(userData)
    .then(res => res.json())
    .catch(error => console.log('ln27', error))
    .then(data => {
      console.log('this is data: ', data);
      this.setState({
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        githubURL: data.github,
        linkedinURL: data.linkedinURL,
        facebookURL: data.facebook,
        twitterURL: twitter,
      });
    })
    .catch(err => console.log('ln40', err));
}   

  render() {

    console.log('**PROPS:**: ', this.props);

    return (
      <div className={'userCard'}>
        <ul>
          <li>
            {this.state.firstName}
          </li>
          <li>
            {this.state.lastName}
          </li>
          <li>
            {this.state.email}
          </li>
          <li>
            {this.state.githubURL}
          </li>
          <li>
            {this.state.linkedinURL}
          </li>
          <li>
            {this.state.facebookURL}
          </li>
          <li>
            {this.state.twitterURL}
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = profileCard;
