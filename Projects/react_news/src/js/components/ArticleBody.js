import React from 'react'
import propTypes from 'prop-types'
import ArticleComment from './ArticleComment'

function createMarkup(a) {
  return {
    __html: a
  }
}

class ArticleBody extends React.Component {
  static propTypes = {
    text: propTypes.arrayOf(propTypes.object),
    open: propTypes.bool
  }

  static defaultProps = {
    text: [],
    open: true
  }

  constructor(props) {
    super(props)
    this.text = props.text.map(item => item.bodyHtml)
    this.markup = this.text.join()
  }

  switchClass = (isOpen) => {
    return isOpen ? 'article__body-text is-active' : 'article__body-text'
  }

  render() {
    return (
      <div className="article__body" >
        <div
          className={this.switchClass(this.props.open)}
          dangerouslySetInnerHTML={createMarkup(this.markup)}
          ref={node => { this.articleText = node }}
        />
        <ArticleComment />
      </div>
    )
  }
}
export default ArticleBody