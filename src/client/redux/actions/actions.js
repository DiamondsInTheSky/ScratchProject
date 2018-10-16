import * as types from '../actiontypes/actionTypes';

export const createUser = (user, pass) => ({
  type: types.CREATE_USER,
  payload: { user, pass },
});

export const addUsername = (username) => ({
  type: types.ADD_USERNAME,
  payload: username,
});

export const addPassword = (password) => ({
  type: types.ADD_PASSWORD,
  payload: password,
});

export const togglePage = () => ({
  type: types.TOGGLE_PAGE,
});

export const requestUser = () => ({
  type: types.REQUEST_USER,
});

export const checkUser = (doc, inputObj) => ({
  type: CHECK_USER,
  expected: doc,
  actual: inputObj,
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
})

export const loginFail = () => ({
  type: types.LOGIN_FAIL,
})

export function verifyUser(inputObj) {
  return function (dispatch) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(inputObj),
    })
      .then((res) => {
        if (res.status === 200) dispatch(loginSuccess());
        else dispatch(loginFail())
      }
      );
  };
}
