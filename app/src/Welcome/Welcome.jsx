import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App.jsx'

import * as actions from './redux/actions/actions.js';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>Welcome!</p>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Welcome);