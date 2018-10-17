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
