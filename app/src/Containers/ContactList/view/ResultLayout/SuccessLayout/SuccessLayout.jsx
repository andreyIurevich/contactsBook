import React from 'react'
import PropTypes from 'prop-types'

import './SuccessLayout.sass'

class SuccessLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }

    this.createContactList = this.createContactList.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

  }

  static propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),
    searchResult: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),

    b: PropTypes.func.isRequired,
    changeActiveContactsPage: PropTypes.func.isRequired,
    selectContact: PropTypes.func.isRequired,
    searchContact: PropTypes.func.isRequired,
    sortingContacts: PropTypes.func.isRequired,

    activePage: PropTypes.number.isRequired,
    isSortByName: PropTypes.bool.isRequired,
  }

  handleSearchChange(event) {
    const { searchContact } = this.props;
 
    searchContact(event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  createContactList(b) {
    const { contactsList, activePage, selectContact, searchResult } = this.props;
    const showContacts = searchResult.length !== 0 ? searchResult : contactsList;
    let resultList = [];
    const contactsPageCount = showContacts.length < 10 ? showContacts.length : 10; 

    for (let i = 0; i < contactsPageCount; i++) {
      resultList.push(
        <p 
          className={b('list-item')} 
          key={showContacts[activePage * 10 + i].id}
          onClick={ () => { selectContact(showContacts[activePage * 10 + i].id); } }
          >
          {activePage * 10 + i + 1}. {showContacts[activePage * 10 + i].name}
        </p>
      );
    }

    return resultList;
  }

  createPageSwitcher(b) {
    const pageList = [];
    const { contactsList, activePage, changeActiveContactsPage, searchResult } = this.props;
    const showContacts = searchResult.length !== 0 ? searchResult : contactsList;

    for (let i = 0; i < Math.floor(showContacts.length / 10); i++) {
      pageList.push(
        <div
          key={i} 
          className={b('switch-item', { active: i === activePage })}
          onClick={() => { changeActiveContactsPage(i); }}
        >
          {i + 1}
        </div>
      );
    }

    return pageList;
  }

  render() {
    const b = this.props.b;
    const contactList = this.createContactList(b);
    const pageSwitcher = this.createPageSwitcher(b);
    const { isSortByName, sortingContacts } = this.props;

    return (
      <div>
        <div className={b('search-container')}>
          <input
            className={b('search-input')} 
            type="text"
            name="search"
            placeholder="Search by name"
            value={this.state.searchName}
            onChange={this.handleSearchChange}
          />
          <button
            className={b('sort-btn')}
            onClick={() => { sortingContacts() }}>
            {
              !isSortByName ? 
              <i className="fas fa-sort-alpha-down"></i> :
              <i className="fas fa-random"></i>
            }
          </button>
        </div>
        <div className={b('name-list')}>
          {contactList}
        </div>
        <div className={b('page-switcher')}>
          {pageSwitcher}
        </div>
      </div>
    );
  }
}

export default SuccessLayout