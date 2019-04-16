import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import './ContactDescription.jsx'

class ContactDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.object),
    selectContact: PropTypes.number,
  }

  render() {
    const b = block('contact-description');
    return (
      <div className={b()}>
        <p>About contact</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactsList: state.contactList.contactsList,
    selectContact: state.contactList.selectContact
  };
}

export default connect(mapStateToProps, null)(ContactDescription)