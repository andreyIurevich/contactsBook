import { actionTypes } from './actionTypes.js'
import axios from 'axios'
import 'babel-polyfill'

function selectContact(contactID) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SELECT_CONTACT,
      payload: contactID
    });
  }
}

function loadContacts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.LOADING_CONTACTS, payload: true });
      const response = await axios.get('http://demo.sibers.com/users');
      dispatch({ type: actionTypes.LOADING_CONTACTS, payload: false });
      if (response.status === 200) {
        dispatch({ 
          type: actionTypes.LOADING_CONTACTS_SUCCESS,
          payload: response.data
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

function changeActiveContactsPage(pageIndex) {
  return {
    type: actionTypes.SELECT_CONTACTS_PAGE,
    payload: pageIndex
  };
}

export { loadContacts, changeActiveContactsPage, selectContact };