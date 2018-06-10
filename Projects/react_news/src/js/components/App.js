import React from 'react';
import Article from './Article';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    fetch(this.props.config.url + this.props.config.key)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.response.results.map((item) => {
              const article = {
                title: item.webTitle,
                apiUrl: `${item.apiUrl}?show-blocks=body&${this.props.config.key}`,
                id: item.id,
                date: item.webPublicationDate,
              };
              return article;
            }),
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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="news">
        <h1 className="news__title">Whats new tooday?</h1>
        <div>{this.state.articles.map(item => <Article key={item.id} article={item} />)}</div>
      </div>
    );
  }
}

export default App;
