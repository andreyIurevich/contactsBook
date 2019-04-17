import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import './PersonalInfo.sass'

class PersonalInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    contactInfo: PropTypes.object,
  }

  render(){
    const b = block('personal-info');
    const { contactInfo } = this.props;
    return (
      <div className={b('container')}>
        <div className={b('item')}>
          <i className="far fa-user"></i>
          <p className={b('item-text')}>{contactInfo.name}</p>
        </div>
        <div className={b('item')}>
          <i className="fas fa-user-tie"></i>
          <p className={b('item-text')}>{contactInfo.username}</p>
        </div>
        <div className={b('item')}>
          <i className="fas fa-envelope"></i>
          <p className={b('item-text')}>{contactInfo.email}</p>
        </div>
        <div className={b('item')}>
          <i className="fas fa-map-marker-alt"></i>
          <p className={b('item-text')}>{contactInfo.address.country}, {contactInfo.address.state}, {contactInfo.address.city}</p>
        </div>
        <div className={b('item')}>
          <i className="fas fa-mobile-alt"></i>
          <p className={b('item-text')}>{contactInfo.phone}</p>
        </div>
        <div className={b('item')}>
          <i className="fab fa-internet-explorer"></i>
          <p className={b('item-text')}>{contactInfo.website}</p>
        </div>
        <div className={b('item')}>
          <i className="fas fa-copyright"></i>
          <p className={b('item-text')}>{contactInfo.company.name}</p>
        </div>
      </div>
    );
  }

}

export default PersonalInfo