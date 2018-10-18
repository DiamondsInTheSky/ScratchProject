import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions'
import { Redirect, Link} from 'react-router-dom'
const mapDispatchToProps = (dispatch) => {
  return {
    getYesUsers: (eventId) => dispatch(actions.getYesUsers(eventId)),
  }
}
const mapStateToProps = (store) => ({
  userArr: store.posts.userArr,

});

class Info extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props.location.state.eventId);
    this.props.getYesUsers(this.props.location.state.eventId);
  }


  render() {
        const dataArr = this.props.userArr.map(ele => {
      return <p>{ele.firstname}</p>
  });
  
    return (
      <div>
        <h2>People who have accepted:</h2>
          {dataArr}
      </div>
    )
  }

};



export default connect(mapStateToProps, mapDispatchToProps)(Info);