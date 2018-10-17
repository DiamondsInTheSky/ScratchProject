import * as types from '../actionTypes/actionTypes';

export const getUserInfoSuccess = (obj) => ({
  type: types.GET_USER_INFO_SUCCESS,
  payload: obj
})

export const getUserInfoFail = (err) => ({
  type: types.GET_USER_INFO_FAIL,
  payload: err
})

export const getEventsSuccess = (obj) => ({
  type: types.GET_EVENTS_SUCCESS,
  payload: obj
})

export const getEventsFail = (obj) => ({
  type: types.GET_EVENTS_FAIL,
  payload: obj
})

export const getUserListFail = (err) => ({
  type: types.GET_USER_LIST_FAIL,
  payload: err
})

export const getUserListSuccess = (obj) => ({
  type: types.GET_USER_LIST_SUCCESS,
  payload: obj
})

export const postEventSuccess = () => ({
  type: types.POST_EVENT_SUCCESS
})
export const postEventFail = (err) => ({
  type: types.POST_EVENT_FAIL,
  payload: err
})

export const addUserToEvent = (obj) => ({
  type: types.ADD_USER_TO_EVENT,
  payload: obj
})

export function postEvent(eventObj) {
  return function(dispatch){
    console.log('Attempting to post an event');
    return fetch('http://localhost:3000/createEvent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        uid: eventObj.uid,
        title: eventObj.title,
        description: eventObj.description
      })
    })
    .then((data) => data.json())
    .then(eventData => {
      console.log('This is some eventData', eventData);
      return fetch('http://localhost:3000/addUsers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userIds:eventObj.invitedUsers,
          event_id: eventData.id,
          status: 'undecided'
        })
      })
    })
    .then(data => {
      console.log('Hitting Post Event Success');
      dispatch(postEventSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(postEventFail(err));
    })
  }
}
export function getUserList() {
  return function(dispatch){
    return fetch('http://localhost:3000/getUsers', {
      headers: {'Content-Type':'application/json'},
    })
    .then((res) => res.json())
    .then(userList => {
      console.log(userList);
      dispatch(getUserListSuccess(userList));
    })
    .catch(err => {
      dispatch(getUserListFail(err));
    })
  }
}

export function getUserInfo(username) {
  return function (dispatch) {
    return fetch('http://localhost:3000/profile/' + username, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    })
      .then(res => res.json())
      .then((res) => {
        console.log('Hello I grabbed the userData');
        console.log(res);
        dispatch(getUserInfoSuccess(res));
        return fetch('http://localhost:3000/getEvents/' + res.id, {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        });
      })
      .then(res => res.json())
      .then((res) => {
        console.log("this should be the array of events",res);
        dispatch(getEventsSuccess(res));  // array of eventObj
      })
      .catch(err => {
        console.log(err);
      dispatch(getUserInfoFail(err));
    });
  };
};
