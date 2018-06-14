import React from 'react'
import shave from 'shave'
import propTypes from 'prop-types'
import ArticleComment from './ArticleComment'

function createMarkup(a) {
  return {
    __html: a
  }
}

class ArticleBody extends React.Component {
  static propTypes = {
    text: propTypes.array,
    open: propTypes.bool
  }

  constructor(props) {
    super(props)
    this.text = props.text.map(item => item.bodyHtml)
    this.markup = this.text.join()
  }

  componentDidMount() {
    shave(this.articleText, '50')

    this.articleText.addEventListener('resize', function() {
      console.log(this)
    })
  }

  componentWillReceiveProps() {
    shave(this.articleText, this.props.open ? 'auto' : '50')
  }

  componentWillUnmount() {
    this.articleText.removeEventListener('resize')
  }

  render() {
    return (
      <div className="article__body">
        <div
          className="article__body-text"
          dangerouslySetInnerHTML={createMarkup(this.markup)}
          ref={node => {
            this.articleText = node
          }}
        />
        <ArticleComment />
      </div>
    )
  }
}
export default ArticleBody
