import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import UserMessage from './UserMessage/UserMessage.jsx'
import PersonalInfo from './PersonalInfo/PersonalInfo.jsx'
import PostsContainer from './PostsContainer/PostsContainer.jsx'

import './ContactDescription.sass'

class ContactDescription extends React.Component {

  constructor(props) {
    super(props);
    this.getContactInfo = this.getContactInfo.bind(this);
    this.getContactPosts = this.getContactPosts.bind(this);
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

  render() {
    const b = block('contact-description');
    const { selectContact } = this.props;
    return (
      <div className={b()}>
        <p className={b('title')}>About contact</p>
        { selectContact === -1 ? 
          <UserMessage /> :
          ( <div>
              <PersonalInfo 
                contactInfo={this.getContactInfo()}
              />
              <PostsContainer 
                posts={this.getContactPosts} 
              />
            </div>
          ) 
        }
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