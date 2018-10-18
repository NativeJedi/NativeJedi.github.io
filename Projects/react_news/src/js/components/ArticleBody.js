import React from 'react'
import propTypes from 'prop-types'

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
      </div>
    )
  }
}
export default ArticleBody