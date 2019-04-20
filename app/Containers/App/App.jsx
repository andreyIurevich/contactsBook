import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { block } from 'bem-cn'
import ContactList from '../ContactList/view/ContactList.jsx'
import ContactDesription from '../ContactDescription/view/ContactDescription.jsx'

import '../../src/default.css'
import '../../src/fonts/San Francisco Display Light/SanFranciscoDisplayLight.css'
import '../../src/fonts/San Francisco Display Medium/SanFranciscoDisplayMedium.css'
import './App.sass'

class App extends React.Component {

  render() {
    const b = block('app');
    
    return (
      <div className={b()}>
        <ContactList />
        <ContactDesription />
      </div>
    );
  }
}

export default App