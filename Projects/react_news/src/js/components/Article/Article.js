import React from 'react'
import propTypes from 'prop-types'
import Button from '../Button'
import ArticleBody from '../ArticleBody'

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
    const text = `<p>${this.props.article}</p>`

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
    const index = this.props.article._id;
    this.props.events.open(index)
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
        <div className="article__footer">
          {this.props.isRemoveVisible && <button onClick={this.openPopap} className="btn btn-small red">Remove article</button>}
        </div>
      </article >
    )
  }
}

export default Article
