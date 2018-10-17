//depends on what we are fetching

import * as types from '../actionTypes/actionTypes';

const initialState = {
  user: {},
  eventsArr: [],
  userArr: []
}

const eventReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // case actions.FETCH_POSTS:
    //   return {
    //     ...state,
    //     items: action.payload;
    //   }
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
    default:
      return state;
  }
}

module.exports = eventReducer;
