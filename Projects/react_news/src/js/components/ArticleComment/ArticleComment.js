import React from 'react'
import Button from '../Button'
import RemoveButton from '../RemoveButton'
import CommentAdd from './components/CommentAdd'

class ArticleComment extends React.Component {
  state = {
    isClosed: true
  }

  clickHandler = () => {
    this.setState({
      isClosed: !this.state.isClosed
    })
  }

  removeComment = (e) => {
    this.props.removeComment(`${this.props.apiUrl}comment/remove/${e.target.id}`)
  }

  render() {
    const comments = this.props.comments.map(item => {
      return (
        <div className="comments__item" key={item.id}>
          <h4 className="comments__author">User {item.author} : <button className="btn btn-small red comments__delete" onClick={this.removeComment} id={item.id}>Delete comment</button></h4>
          <p className="comments__text">{item.comment}</p>
        </div>
      )
    })
    return (
      <div className="comments">
        <div className="comments__head">
          <h4 className="comments__title">Comments: {this.props.comments.length}</h4>
          {!!comments.length && 
            <Button
              click={this.clickHandler}
              text={this.state.isClosed ? 'show comments' : 'hide comments'}
              className={this.state.isClosed ? 'btn btn-small waves-effect comments__btn' : 'btn btn-small comments__btn is-opened'}
            />
          }
        </div>
        <div className="comments__body">
          {!this.state.isClosed && comments}
          {this.props.isUser &&
            <CommentAdd token={this.props.token} apiUrl={this.props.apiUrl} id={this.props.id} />}
        </div>
      </div>
    )
  }
}

export default ArticleComment
