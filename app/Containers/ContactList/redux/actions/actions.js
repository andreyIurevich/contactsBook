import { actionTypes } from './actionTypes.js'
import axios from 'axios'
import 'babel-polyfill'

function selectContact(contactID) {
  return  {
    type: actionTypes.SELECT_CONTACT,
    payload: contactID
  }
}

function loadContacts() {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.LOADING_CONTACTS, payload: true });
    const response = await axios.get('http://demo.sibers.com/users');
    dispatch({ type: actionTypes.LOADING_CONTACTS, payload: false });
    if (response.status === 200) {
      dispatch({ 
        type: actionTypes.LOADING_CONTACTS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actionTypes.LOADING_CONTACTS_FAILURE,
      }); 
    }
  };
}

function changeActiveContactsPage(pageIndex) {
  return {
    type: actionTypes.SELECT_CONTACTS_PAGE,
    payload: pageIndex
  };
}

function updateContact(newContact) {
  return (dispatch, getState) => {
    let contactsList = getState().contactList.contactsList;
    let selectContact = contactsList.filter((contact) => contact.id === newContact.id)[0];
    Object.assign(selectContact, newContact);
    dispatch({
      type: actionTypes.UPDATE_CONTACT_LIST,
      payload: contactsList
    });
  }
}

function searchContact(searchName) {
  return (dispatch, getState) => {
    let contactsList = [...getState().contactList.contactsList];
    if (searchName.length === 0) {
      dispatch({
        type: actionTypes.SEARCH_CONTACT,
        payload: contactsList
      });
    } else {
      const searchResult = contactsList.filter(contact => contact.name.includes(searchName));
      if (searchResult.length !== 0) {
        dispatch({
          type: actionTypes.SEARCH_CONTACT,
          payload: searchResult
        });
      } 
    }
  }
}

function sortingContacts() {
  return (dispatch, getState) => {
    const isSortingByName = getState().contactList.isSortByName;
    const contactList = [...getState().contactList.contactsList];

    if (isSortingByName) {
      dispatch({
        type: actionTypes.CHANGE_SORT_STATUS,
        payload: false,
      });
      dispatch({
        type: actionTypes.SEARCH_CONTACT,
        payload: []
      });
    } else {
      dispatch({
        type: actionTypes.CHANGE_SORT_STATUS,
        payload: true,
      });
      contactList.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB) 
          return -1
        if (nameA > nameB)
          return 1
        return 0 
      });
      dispatch({
        type: actionTypes.SEARCH_CONTACT,
        payload: contactList
      });
    }
  }
}

export { 
        loadContacts, 
        changeActiveContactsPage, 
        selectContact,
        updateContact,
        searchContact,
        sortingContacts
      };