import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'
import ArticleBody from './ArticleBody'

class Article extends React.Component {
  static propTypes = {
    article: propTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      body: [],
      isClosed: true
    }
  }

  componentDidMount() {
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
  }

  clickHandler = () => {
    this.setState({
      isClosed: !this.state.isClosed
    })
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
            text={this.state.isClosed ? 'show' : 'hide'}
            className={this.state.isClosed ? 'button' : 'button is-opened'}
          />
        </div>
        <ArticleBody text={body} open={this.state.isClosed} />
      </article>
    )
  }
}

export default Article
