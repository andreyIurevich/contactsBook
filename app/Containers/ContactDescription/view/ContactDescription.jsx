import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import UserMessage from './UserMessage/UserMessage.jsx'
import PersonalInfo from './PersonalInfo/PersonalInfo.jsx'
import PostsContainer from './PostsContainer/PostsContainer.jsx'
import AccountHistory from './AccountHistory/AccountHistory.jsx'

import './ContactDescription.sass'

class ContactDescription extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activePage: 'Info',
      title: 'Personal Info'
    }

    this.getContactInfo = this.getContactInfo.bind(this);
    this.getContactPosts = this.getContactPosts.bind(this);
    this.setActivePage = this.setActivePage.bind(this);
    this.createActiveLayout = this.createActiveLayout.bind(this);
    this.getContactHistory = this.getContactHistory.bind(this);
  }

  static propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.object),
    selectContact: PropTypes.number,
  }

  getContactInfo() {
    const { selectContact, contactsList } = this.props;
    return contactsList.filter(contact => contact.id === selectContact)[0];
  }

  getContactPosts() {
    const { selectContact, contactsList } = this.props;
    return contactsList.filter(contact => contact.id === selectContact)[0].posts;
  }

  getContactHistory() {
    const { selectContact, contactsList } = this.props;
    return contactsList.filter(contact => contact.id === selectContact)[0].accountHistory;
  }

  setActivePage(activePage) {
    let title = '';

    switch (activePage) {
      case 'Info':
        title = 'Personal Info';
        break
      case 'Posts':
        title = 'Contact Posts';
        break
      case 'History':
        title = 'Account History';
        break
      default:
        title = 'Personal Info';
    }
    
    this.setState({
      activePage,
      title
    });
  }

  createActiveLayout(b) {
    const { activePage } = this.state;
    const { selectContact } = this.props;

    if ( selectContact === -1 ) {
      return (
        <UserMessage b={b}/>
      );
    }

    switch (activePage) {
      case 'Info':
        return (
          <PersonalInfo 
            contactInfo={this.getContactInfo()}
          />
        );
      case 'Posts':
        return (
          <PostsContainer 
            posts={this.getContactPosts()} 
          />
        );
      case 'History':
        return (
          <AccountHistory
            history={this.getContactHistory()}
          />
        );
      default:
        return (
          <PersonalInfo 
            contactInfo={this.getContactInfo()}
          />
        );
    }

  }

  render() {
    const b = block('contact-description');
    const { activePage, title } = this.state;
    const activeLayout = this.createActiveLayout(b);
    const { selectContact } = this.props;
    return (
      <div className={b()}>
        <p className={b('title')}>{title}</p>
        <div className={b('page-switcher')}>
          <p 
            className={b('switch-item')}
            onClick={() => { this.setActivePage('Info'); }}
            >
            Info
          </p>
          <p 
            className={b('switch-item')}
            onClick={() => { this.setActivePage('Posts'); }}
          >
            Posts
          </p>
          <p 
            className={b('switch-item')}
            onClick={() => { this.setActivePage('History'); }}
            >
            History
          </p>
        </div>
        {activeLayout}
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