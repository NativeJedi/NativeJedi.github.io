import React from 'react'
import Button from '../Button'
import RemoveButton from '../RemoveButton'

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
    const article = this.props.articles.filter(item => item.id === this.props.id)
    
    const comments = article[0].comments.map(el => {
      return (
        <p className="comment__item" key={el.id}>
          {el.text}
          <RemoveButton 
            removeEvent={this.props.removeComment} 
            commentId={el.id}
            articleId={article[0].id}
          />
        </p>
      )
    })

    return (
      <div className="comments">
        <div className="comments__head">
          <h4 className="comments__title">Comments: {comments.length}</h4>
          <Button
            click={this.clickHandler}
            text={this.state.isClosed ? 'show comments' : 'hide comments'}
            className={this.state.isClosed ? 'button' : 'button is-opened'}
          />
        </div>
        <div className="comment">{!this.state.isClosed && comments}</div>
      </div>
    )
  }
}

export default ArticleComment
