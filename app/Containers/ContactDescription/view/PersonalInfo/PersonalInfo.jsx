import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import * as actions from './redux/actions/actions.js'

import './PersonalInfo.sass'

class PersonalInfo extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      id: this.props.contactInfo.id,
      name: this.props.contactInfo.name,
      username: this.props.contactInfo.username,
      email: this.props.contactInfo.email,
      location:
        `${this.props.contactInfo.address.country}, ${this.props.contactInfo.address.state}, ${this.props.contactInfo.address.city}`,
      phone: this.props.contactInfo.phone,
      website: this.props.contactInfo.website,
      company: this.props.contactInfo.company.name
    }
  }
  
  static propTypes = {
    contactInfo: PropTypes.object,
    updateContact: PropTypes.func.isRequired
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    const { contactInfo } = nextProps;

    this.setState({
      id: contactInfo.id,
      name: contactInfo.name,
      username: contactInfo.username,
      email: contactInfo.email,
      location:
        `${contactInfo.address.country}, ${contactInfo.address.state}, ${contactInfo.address.city}`,
      phone: contactInfo.phone,
      website: contactInfo.website,
      company: contactInfo.company.name
    });
  }

  getUpdatedValues() {
    const { contactInfo } = this.props;

    return {
      id: this.props.contactInfo.id,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      address: {
        ...contactInfo.address,
        city: this.state.location.split(', ')[2],
        state: this.state.location.split(', ')[1],
        country: this.state.location.split(', ')[0],
      },
      phone: this.state.phone,
      website: this.state.website,
      company: { name: this.state.company }
    };
  }

  render(){
    const b = block('personal-info');
    const { contactInfo } = this.props;
    
    return (
      <div className={b('container')}>
        <div className={b('item')}>
          <i className="far fa-user"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="name" 
            value={this.state.name || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <div className={b('item')}>
          <i className="fas fa-user-tie"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="username" 
            value={this.state.username || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <div className={b('item')}>
          <i className="fas fa-envelope"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="email" 
            value={this.state.email || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <div className={b('item')}>
          <i className="fas fa-map-marker-alt"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="location"
            placeholder="Country, state, city" 
            value={this.state.location || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <div className={b('item')}>
          <i className="fas fa-mobile-alt"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="phone" 
            value={this.state.phone || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <div className={b('item')}>
          <i className="fab fa-internet-explorer"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="website" 
            value={this.state.website || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <div className={b('item')}>
          <i className="fas fa-copyright"></i>
          <input
            className={b('item-text')}
            type="text" 
            name="company" 
            value={this.state.company || ''} 
            onChange={this.handleChange} 
          />
        </div>
        <button
          className={b('save-btn')} 
          onClick={() => { this.props.updateContact(this.getUpdatedValues()) } }>
          <i className="fas fa-cloud-download-alt"></i>
          Save
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(PersonalInfo)