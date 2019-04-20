import actionTypes from '../actions/actionTypes' 

const initialState = {
  updateContact: null,
}

export default function descriptionContact(state = initialState, action) {
  
  switch (action.type) {
    case actionTypes.UPDATE_CONTACT:
     return {
       ...state,
       updateContact: action.payload,
     }
     default:
      return state;
  }
  
}