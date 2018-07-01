import React from 'react'

class RemoveButton extends React.Component {
  state = {

  }

  removeComment = () => {
    this.props.removeEvent(this.props.articleId, this.props.commentId)
  }

  render() {
    return (
      <button className="comment__remove" onClick={this.removeComment} />
    )
  }
}

export default RemoveButton