import React from 'react'
import Button from './Button'

const comments = [
  {
    text: "It's very nice task!",
    id: 0
  },
  {
    text: 'This is cool task!',
    id: 1
  }
]

class ArticleComment extends React.Component {
  state = {
    isClosed: true
  }

  clickHandler = () => {
    this.setState({
      isClosed: !this.state.isClosed
    })
  }

  render() {
    return (
      <div className="comments">
        <div className="comments__head">
          <h4 className="comments__title">Comments ({comments.length})</h4>
          <Button
            click={this.clickHandler}
            text={this.state.isClosed ? 'show comments' : 'hide comments'}
            className={this.state.isClosed ? 'button' : 'button is-opened'}
          />
        </div>
        <div className="comment">
          {!this.state.isClosed &&
            comments.map(item => <p key={item.id}>{item.text}</p>)}
        </div>
      </div>
    )
  }
}

export default ArticleComment
