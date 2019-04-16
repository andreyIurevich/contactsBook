import React from 'react'
import PropTypes from 'prop-types'

import './SuccessLayout.sass'

class SuccessLayout extends React.Component {

  constructor(props) {
    super(props);
    this.createContactList = this.createContactList.bind(this);
  }

  static propTypes = {
    contactsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),
    b: PropTypes.func.isRequired,
    activePage: PropTypes.number.isRequired,
    changeActiveContactsPage: PropTypes.func.isRequired,
  }
  
  createContactList(b) {
    const { contactsList, activePage } = this.props;
    let resultList = [];

    for (let i = 0; i < 10; i++) {
      resultList.push(
        <p 
          className={b('list-item')} 
          key={contactsList[activePage * 10 + i].id}>
          {activePage * 10 + i + 1}. {contactsList[activePage * 10 + i].name}
        </p>
      );
    }

    return resultList;
  }

  createPageSwitcher(b) {
    const pageList = [];
    const { contactsList, activePage, changeActiveContactsPage } = this.props;

    for (let i = 0; i < Math.floor(contactsList.length / 10); i++) {
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
    
    return (
      <div>
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