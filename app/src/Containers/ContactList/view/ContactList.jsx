import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import * as actions from '../redux/actions/actions.js'

import WaitLayout from './ResultLayout/WaitLayout/WaitLayout.jsx'
import SuccessLayout from './ResultLayout/SuccessLayout/SuccessLayout.jsx'
import ErrorLayout from './ResultLayout/ErrorLayout/ErrorLayout.jsx'

import './ContactList.sass'

class ContactList extends React.Component {

  constructor(props) {
    super(props);
    this.makeResultLayout = this.makeResultLayout.bind(this);
  }

  static propTypes = {
    changeActiveContactsPage: PropTypes.func.isRequired,
    loadContacts: PropTypes.func.isRequired,
    selectContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired,
    searchContact: PropTypes.func.isRequired,
    sortingContacts: PropTypes.func.isRequired,

    loadingContacts: PropTypes.bool.isRequired,
    loadingContactsResult: PropTypes.string.isRequired,
    activePage: PropTypes.number.isRequired,
    updatedContact: PropTypes.object,


    contactsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })),

    searchResult: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),
  }

  componentDidMount() {
    const { loadContacts } = this.props;
    loadContacts();
  }

  makeResultLayout(b) {
    const {
      loadingContacts,
      loadingContactsResult, 
      contactsList,
      activePage,
      changeActiveContactsPage,
      selectContact,
      searchContact,
      searchResult,
      isSortByName,
      sortingContacts
    } = this.props;

    if (loadingContacts) {
      return (
        <WaitLayout />
      );
    }

    if (loadingContactsResult === 'error') 
      return (
        <ErrorLayout />
      );
    
    if (!loadingContacts && loadingContactsResult === 'success')
      return (
        <SuccessLayout 
          contactsList={contactsList} 
          b={b} 
          activePage={activePage}
          changeActiveContactsPage={changeActiveContactsPage}
          selectContact={selectContact}
          searchContact={searchContact}
          searchResult={searchResult}
          isSortByName={isSortByName}
          sortingContacts={sortingContacts}
        />
      );
  }

  render() {
    const b = block('contact-list');
    const resultLayout = this.makeResultLayout(b);
    const { updatedContact, updateContact } = this.props;

    if (updatedContact !== null) {
      updateContact(updatedContact);
    }

    return (
      <div className={b()}>
        <p className={b('title')}>Contacts</p>
        {resultLayout}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    loadingContacts: state.contactList.loadingContacts,
    loadingContactsResult: state.contactList.loadingContactsResult,
    contactsList: state.contactList.contactsList,
    activePage: state.contactList.activePage,
    updatedContact: state.descriptionContact.updateContact,
    searchResult: state.contactList.searchResult,
    isSortByName: state.contactList.isSortByName,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);