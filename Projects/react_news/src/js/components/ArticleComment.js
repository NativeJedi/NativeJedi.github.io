import React from 'react';
import Button from './Button';

const comments = [
  {
    text: "It's very nice task!",
    id: 0,
  },
  {
    text: 'This is cool task!',
    id: 1,
  },
];

class ArticleComment extends React.Component {
  state = {
    isOpen: false,
  };

  clickHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="comments">
        <div className="comments__head">
          <h4 className="comments__title">Comments ({comments.length})</h4>
          <Button
            click={this.clickHandler}
            text={this.state.isOpen ? 'hide comments' : 'show comments'}
            className="button button--sm"
          />
        </div>
        <div className="comment">
          {this.state.isOpen && comments.map(item => <p key={item.id}>{item.text}</p>)}
        </div>
      </div>
    );
  }
}

export default ArticleComment;
