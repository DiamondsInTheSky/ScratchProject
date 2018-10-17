//depends on what we are fetching

import * as types from '../actionTypes/actionTypes';

const initialState = {
  user: {},
  eventsArr: [],
  userArr: [],
  invitedUsers: []
}

const eventReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.GET_USER_INFO_SUCCESS:
      newState = Object.assign({}, state);
      let newUserObj = Object.assign({}, newState.user);
      newUserObj = action.payload;
      newState.user = newUserObj;
      console.log(newState);
      return newState;      
    case types.GET_EVENTS_SUCCESS:
      newState = Object.assign({}, state);
      let newStateArray = newState.eventsArr.slice();
      newStateArray = action.payload;
      newState.eventsArr = newStateArray
      console.log(newState);
      return newState;
    case types.GET_USER_LIST_SUCCESS:
      newState = Object.assign({}, state);
      let newUserArr = newState.userArr.slice();
      newUserArr = action.payload;
      newState.userArr = newUserArr;
      return newState;
    case types.POST_EVENT_SUCCESS:
      alert('Event Saved!');
      newState = Object.assign({}, state);
      let newInvitedArr = [];
      newState.invitedUsers = newInvitedArr;
      return newState;
    case types.ADD_USER_TO_EVENT:
      newState = Object.assign({}, state);
      let newInvitedUsersArr = newState.invitedUsers.slice();
      newInvitedUsersArr.push(action.payload);
      newState.invitedUsers = newInvitedUsersArr;
      return newState;
    default:
      return state;
  }
}

module.exports = eventReducer;
