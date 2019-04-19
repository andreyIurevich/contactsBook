import { actionTypes } from "../actions/actionTypes";

const initialState = {
  loadingContacts: false,
  loadingContactsResult: 'not known',
  activePage: 0,
  selectContact: -1,
  isSortByName: false,
  searchResult: [],
  contactsList: [],
};

export default function contactsList(state = initialState, action) {
  switch (action.type) {

    case actionTypes.LOADING_CONTACTS: 
     return {
        ...state,
        loadingContacts: action.payload
     }
    
    case actionTypes.LOADING_CONTACTS_SUCCESS:
     return {
       ...state,
       loadingContactsResult: 'success',
       contactsList: action.payload,
     }
    
    case actionTypes.LOADING_CONTACTS_FAILURE:
     return {
       ...state,
       loadingContactsResult: 'error',
       contactsList: []
     }
    
    case actionTypes.SELECT_CONTACTS_PAGE:
     return {
       ...state,
       activePage: action.payload,
     }
    
    case actionTypes.SELECT_CONTACT:
     return {
       ...state,
       selectContact: action.payload
     }
    
     case actionTypes.UPDATE_CONTACT_LIST:
      return {
        ...state,
        contactsList: action.payload
      }
    
     case actionTypes.SEARCH_CONTACT:
      return {
        ...state,
        searchResult: action.payload
      }
     
     case actionTypes.CHANGE_SORT_STATUS:
      return {
        ...state,
        isSortByName: action.payload
      }
    
    default:
     return state;
  }
}