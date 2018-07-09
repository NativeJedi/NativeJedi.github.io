import React from 'react'
import propTypes from 'prop-types'
import ArticleComment from './ArticleComment/'

class ArticleBody extends React.Component {
  static propTypes = {
    open: propTypes.bool
  }

  static defaultProps = {
    open: true
  }

  switchClass = (isOpen) => {
    return isOpen ? 'article__body-text is-active' : 'article__body-text'
  }

  render() {
    return (
      <div className="article__body" >
        <div className={this.switchClass(this.props.open)}>
          {this.props.text}
        </div>
        {/* <ArticleComment id={this.props.id} /> */}
      </div>
    )
  }
}
export default ArticleBody