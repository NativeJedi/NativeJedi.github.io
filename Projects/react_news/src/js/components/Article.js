import React from 'react';
import Button from './Button';
import ArticleBody from './ArticleBody';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      body: [],
      isOpen: false,
    };
  }

  componentDidMount() {
    fetch(this.props.article.apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            body: result.response.content.blocks.body,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  clickHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { error, isLoaded, body } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
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
        {this.state.isOpen && <ArticleBody text={body} />}
      </article>
    );
  }
}

export default Article;
