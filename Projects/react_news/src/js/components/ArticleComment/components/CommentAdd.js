import React from 'react'
import Cookies from 'js-cookie'

class CommentAdd extends React.Component {
  state = {
    commentText: ''
  }

  addComment = (e) => {
    e.preventDefault()
    fetch(`${this.props.apiUrl}comment/create`, { 
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        article_id: this.props.id,
        comment: this.state.commentText
      })
    }).then(res => console.log(res))

    this.setState({
      commentText: ''
    })
  }

  handleComment = (e) => {
    this.setState({
      commentText: e.target.value
    })
  }

  render () {
    return (
      <form className="form" onSubmit={this.addComment}>
        <div className="input-field">
          <i className="material-icons prefix">mode_edit</i>
          <textarea
            value={this.state.commentText}
            onChange={this.handleComment}
            className="materialize-textarea"
            id={`comment-${this.props.id}`}
          />
          <label htmlFor={`comment-${this.props.id}`}>Write a comment</label>
        </div>
        <button className="btn btn-small waves-effect" type="submit">Add a comment</button>
      </form>
    )
  }
}

export default CommentAdd