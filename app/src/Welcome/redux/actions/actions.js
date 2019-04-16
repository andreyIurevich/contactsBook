import { actionTypes } from './actionTypes';
import 'babel-polyfill';

function addUser(userName) {
  return async (dispatch, getState) => {
    let new_users = getState().users;
    new_users.push(userName);
    dispatch({ type: actionTypes.ADD_USER, payload: new_users });
  };
}

export { addUser };