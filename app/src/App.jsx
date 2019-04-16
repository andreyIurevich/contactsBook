import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { block } from 'bem-cn'
import ContactList from './Containers/ContactList/view/ContactList.jsx'

import './default.css'
import './fonts/San Francisco Display Light/SanFranciscoDisplayLight.css'
import './fonts/San Francisco Display Medium/SanFranciscoDisplayMedium.css'
import './App.sass'

class App extends React.Component {

  render() {
    const b = block('app');
    
    return (
      <div className={b()}>
        <ContactList />
      </div>
    );
  }
}

export default App