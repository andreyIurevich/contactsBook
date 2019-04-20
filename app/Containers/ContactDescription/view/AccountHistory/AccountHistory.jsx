import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'
import { uid } from 'react-uid'

import './AccountHistory.sass'

export default class AccountHistory extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    history: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const b = block('history');
    const { history } = this.props;
    const historyLayout = history.map((historyItem, index) => {
      const itemList = Object.keys(historyItem).map((key) => {
        return (
          <p className={b('item')} key={uid(key)}>
            <span className={b('first-word')}>{key} :</span> {historyItem[key]}
          </p>
        );
      })
      return (
        <div className={b('block')} key={index}>
          {itemList}
        </div>
      );
    });
    return (
      <div className={b()}>
        {historyLayout}
      </div>
    );
  }
} 