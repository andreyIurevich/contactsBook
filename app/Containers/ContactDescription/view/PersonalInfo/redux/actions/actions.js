import actionTypes from './actionTypes.js'

export function updateContact(contact) {
  return {
    type: actionTypes.UPDATE_CONTACT,
    payload: contact
  }
}