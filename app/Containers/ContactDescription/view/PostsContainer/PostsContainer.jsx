import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { block } from 'bem-cn'

import './PostsContainer.sass'

export default class PostsContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const b = block('posts-container');
    const { posts } = this.props;
    const postsLayout = posts.map((post, index) => {
      return (
        <div className={b('post')} key={index}>
          <p className={b('post-item')}>
            <span className={b('first-word')}>words:</span> [ {post.words.join(', ')} ]
          </p>
          <p className={b('post-item')}>
            <span className={b('first-word')}>sentence:</span> {post.sentence}
          </p>
          <p className={b('post-item')}>
            <span className={b('first-word')}>paragraph:</span> {post.paragraph}
          </p>
        </div>
      );
    });

    return (
      <div className={b()}>
        {postsLayout}
      </div>
    );
  }
}