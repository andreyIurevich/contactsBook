import { actionTypes } from './actionTypes.js'
import axios from 'axios'
import 'babel-polyfill'

function selectContact(contactID) {

}

function getContactsNameList(response) {
  return response.data.map((contact) => {
    return {
      id: contact.id,
      name: contact.name
    };
  });
}

function loadContacts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.LOADING_CONTACTS, payload: true });
      const response = await axios.get('http://demo.sibers.com/users');
      dispatch({ type: actionTypes.LOADING_CONTACTS, payload: false });
      if (response.status === 200) {
        const nameList = getContactsNameList(response);
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

export { loadContacts, changeActiveContactsPage  };