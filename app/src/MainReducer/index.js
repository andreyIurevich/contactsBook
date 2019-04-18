import { combineReducers } from 'redux'
import contactList from '../Containers/ContactList/redux/reducer/index'
import descriptionContact from '../Containers/ContactDescription/view/PersonalInfo/redux/reducer/index'

export default combineReducers({
  contactList,
  descriptionContact
})