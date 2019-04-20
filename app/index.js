import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { HashRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import contactList from './Containers/ContactList/redux/reducer/index'
import descriptionContact from './Containers/ContactDescription/view/PersonalInfo/redux/reducer/index'
import App from './Containers/App/App.jsx'

const rootReducer = combineReducers({
  contactList,
  descriptionContact
});

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

store.subscribe(() => {
  localStorage['contacts'] = JSON.stringify(store.getState().contactList.contactsList);
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
