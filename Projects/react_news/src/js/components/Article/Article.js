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
    const text = `<p>${this.props.article.text}</p>`
    const textArr = []
    textArr.push(text)

    this.state = {
      error: null,
      isLoaded: false,
      body: [...textArr],
      isOpen: false,
    }
  }

  componentDidMount() {
    if (this.props.article.apiUrl) {
      fetch(this.props.article.apiUrl)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              isLoaded: true,
              body: result.response.content.blocks.body
            })
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
    } else {
      this.setState({
        isLoaded: true
      })
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
    const index = this.props.article.id;
    this.props.events.open(index)
  }

  render() {
    const { error, isLoaded, body } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    }
    return (
      <article className="article">
        <div className="article__head">
          <h3 className="article__title">{this.props.article.title}</h3>
          <Button
            click={this.clickHandler}
            text={this.state.isOpen ? 'hide' : 'show'}
            className={this.state.isOpen ? 'button is-opened' : 'button'}
          />
        </div>
        <ArticleBody text={body} open={this.state.isOpen} id={this.props.article.id} />
        <div className="article__footer">
          {this.props.isRemoveVisible && <button onClick={this.openPopap} className="button-danger">Remove article</button>}
        </div>
      </article >
    )
  }
}

export default Article
