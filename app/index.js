import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { HashRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import mainReducer from './src/MainReducer/index'
import App from './src/App.jsx'

let store = createStore(
  mainReducer,
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
