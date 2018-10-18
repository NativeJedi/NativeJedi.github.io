import React from 'react'
import propTypes from 'prop-types'
import Button from '../Button'
import ArticleBody from '../ArticleBody'
import ArticleComment from '../ArticleComment'

class Article extends React.Component {
  static propTypes = {
    article: propTypes.object,
    events: propTypes.objectOf(propTypes.func)
  }

  static defaultProps = {
    article: {},
    events: {}
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  clickHandler = () => {
    this.setState(prev => {
      return {
        isOpen: !prev.isOpen
      }
    })
  }

  openPopap = () => {
    this.props.events.open(this.props.article.slug)
  }

  render() {
    return (
      <article className="article">
        <div className="article__head">
          <h3 className="article__title">{this.props.article.title}</h3>
          <Button
            click={this.clickHandler}
            text={this.state.isOpen ? 'hide' : 'show'}
            className={this.state.isOpen ? 'btn btn-small waves-effect button is-opened' : 'btn btn-small waves-effect button'}
          />
        </div>
        <ArticleBody
          text={this.props.article.text}
          open={this.state.isOpen}
          id={this.props.article._id} 
        />
        <ArticleComment comments={this.props.article.comments} id={this.props.article._id} />
        <div className="article__footer">
          {this.props.isRemoveVisible && <button onClick={this.openPopap} className="btn btn-small red">Remove article</button>}
        </div>
      </article >
    )
  }
}

export default Article
