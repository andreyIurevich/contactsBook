import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

export default class PostsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postVisible: false,
      accountHistoryVisible: false,
    };
    this.changePostsVisisble = this.changePostsVisisble.bind(this);
  }

  changePostsVisisble() {
    this.setState({
      postVisible: !this.state.postVisible,
    });
  }

  render() {
    const b = block('posts-container');
    return (
      <div 
        className={b('posts-button')}
        onClick={this.changePostsVisisble}
      >
        <p>Posts {this.state.postVisible ? 'visible' : 'none visible'}</p>
      </div>
    );
  }
}